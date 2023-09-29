import { loadPage, render, createEditDialog } from './page';

(function () {
    const createTodo = (title, description, dueDate, priority) => {
        return { title, description, dueDate, priority, completed: false };
    };

    const createProject = (name) => {
        const todos = [];
        const getTodoLength = () => {
            return todos.length;
        }
        const getTodo = (idx) => {
            return todos[idx];
        }
        const addTodo = (todo) => {
            todos.push(todo);
        };
        const deleteTodo = (idx) => {
            todos.splice(idx, 1);
        };
        return { name, getTodoLength, getTodo, addTodo, deleteTodo };
    };

    const projects = [];
    const defaultProject = createProject('My Project');
    projects.push(defaultProject);

    loadPage(projects);
    render(projects);
    addDeleteProjectEvents();

    function addDeleteProjectEvents() {
        document.querySelectorAll('.delete-project').forEach(button => {
            button.addEventListener('click', (e) => {
                projects.splice(e.target.dataset.projectKey, 1);
                repopulateProjectSelect();
                render(projects);
                addEvents();
            });
        });
    }

    function addMarkCompleteEvents() {
        document.querySelectorAll('.mark-complete').forEach(button => {
            button.addEventListener('click', (e) => {
                const project = projects[e.target.dataset.projectKey];
                const todo = project.getTodo(e.target.dataset.todoKey);
                todo.completed = !todo.completed;
                render(projects);
                addEvents();
            });
        });
    }

    function addDeleteTodoEvents() {
        document.querySelectorAll('.delete-todo').forEach(button => {
            button.addEventListener('click', (e) => {
                const project = projects[e.target.dataset.projectKey];
                project.deleteTodo(e.target.dataset.todoKey);
                render(projects);
                addEvents();
            });
        });
    }

    function addEditTodoEvents() {
        document.querySelectorAll('.edit-todo').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectIdx = e.target.dataset.projectKey;
                const todoIdx = e.target.dataset.todoKey;
                const project = projects[projectIdx];
                const todo = project.getTodo(todoIdx);
                createEditDialog(projectIdx, projects, todo);

                const editDialog = document.getElementById('editTodoDialog');

                const editSelectDropdown = document.getElementById('editSelect');
                const editTitleInput = document.getElementById('editTitle');
                const editDescriptionInput = document.getElementById('editDescription');
                const editDateInput = document.getElementById('editDate');
                const editLowPriorityRadio = document.getElementById('editLow');
                const editMidPriorityRadio = document.getElementById('editMid');
                const editHighPriorityRadio = document.getElementById('editHigh');

                let editTodoConfirmed = false;

                const editTodoCancelBtn = document.getElementById('editTodoCancel');
                editTodoCancelBtn.addEventListener('click', () => {
                    editTodoConfirmed = false;
                    editDialog.close();
                });

                const editTodoConfirmBtn = document.getElementById('editTodoConfirm');
                editTodoConfirmBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    const unenteredFieldMessage = validateAllTodoFieldsEntered(
                        editTitleInput.value,
                        editDescriptionInput.value,
                        editDateInput.value,
                        editLowPriorityRadio,
                        editMidPriorityRadio,
                        editHighPriorityRadio
                    );
                    if (unenteredFieldMessage) {
                        alert(unenteredFieldMessage);
                    } else {
                        editTodoConfirmed = true;
                        editDialog.close();
                    }
                });

                editDialog.addEventListener('close', () => {
                    if (editTodoConfirmed) {
                        const priority = editLowPriorityRadio.checked ? 'Low' : editMidPriorityRadio.checked ? 'Mid' : 'High';
                        const newProject = projects[editSelectDropdown.value];
                        const editedProject = projects[projectIdx];
                        if (newProject === editedProject) {
                            todo.title = editTitleInput.value;
                            todo.description = editDescriptionInput.value;
                            todo.dueDate = editDateInput.value;
                            todo.priority = priority;
                        } else {
                            const completed = editedProject.getTodo(todoIdx).completed;
                            editedProject.deleteTodo(todoIdx);
                            const todo = createTodo(
                                editTitleInput.value,
                                editDescriptionInput.value,
                                editDateInput.value,
                                priority);
                            todo.completed = completed;
                            newProject.addTodo(todo);
                        }

                        render(projects);
                        addEvents();
                    }
                });

                editDialog.showModal();
            });
        });
    }

    function addCollapseEvents() {
        document.querySelectorAll('.todo-card').forEach(card => {
            card.addEventListener('click', (e) => {
                let target = e.target;
                while (!target.classList.contains('todo-card')) {
                    target = target.parentElement;
                }
                const children = target.children;
                const secondRow = children.item(1);
                const thirdRow = children.item(2);
                if (secondRow.style.display === 'flex') {
                    secondRow.style.display = 'none';
                    thirdRow.style.display = 'none';
                } else {
                    secondRow.style.display = 'flex';
                    thirdRow.style.display = 'flex';
                }
            });
        });
    }

    function addEvents() {
        addDeleteProjectEvents();
        addMarkCompleteEvents();
        addDeleteTodoEvents();
        addEditTodoEvents();
        addCollapseEvents();
    }

    const projectDialog = document.getElementById('projectDialog');

    const addProjectBtn = document.getElementById('addProject');
    addProjectBtn.addEventListener('click', () => {
        projectDialog.showModal();
    });

    const nameInput = document.getElementById('name');

    let projectConfirmed = false;

    const projectCancelBtn = document.getElementById('projectCancel');
    projectCancelBtn.addEventListener('click', () => {
        projectConfirmed = false;
        projectDialog.close();
    });

    const projectConfirmBtn = document.getElementById('projectConfirm');
    projectConfirmBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (!nameInput.value) {
            alert('A project must have a name, please enter one.');
        } else {
            projectConfirmed = true;
            projectDialog.close();
        }
    });

    const selectDropdown = document.getElementById('select');

    projectDialog.addEventListener('close', () => {
        if (projectConfirmed) {
            const project = createProject(nameInput.value);
            projects.push(project);
            repopulateProjectSelect();
            render(projects);
            addEvents();
        }
        nameInput.value = '';
    });

    function repopulateProjectSelect() {
        selectDropdown.replaceChildren();
        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const option = document.createElement('option');
            option.setAttribute('value', i);
            option.textContent = project.name;
            selectDropdown.appendChild(option);
        }
    }

    const todoDialog = document.getElementById('todoDialog');

    const addTodoBtn = document.getElementById('addTodo');
    addTodoBtn.addEventListener('click', () => {
        if (projects.length == 0) {
            alert('There are no projects to add a todo to. Please create a project first.');
        } else {
            todoDialog.showModal();
        }
    });

    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const lowPriorityRadio = document.getElementById('low');
    const midPriorityRadio = document.getElementById('mid');
    const highPriorityRadio = document.getElementById('high');

    let todoConfirmed = false;

    const todoCancelBtn = document.getElementById('todoCancel');
    todoCancelBtn.addEventListener('click', () => {
        todoConfirmed = false;
        todoDialog.close();
    });

    const todoConfirmBtn = document.getElementById('todoConfirm');
    todoConfirmBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const unenteredFieldMessage = validateAllTodoFieldsEntered(
            titleInput.value,
            descriptionInput.value,
            dateInput.value,
            lowPriorityRadio,
            midPriorityRadio,
            highPriorityRadio
        );
        if (unenteredFieldMessage) {
            alert(unenteredFieldMessage);
        } else {
            todoConfirmed = true;
            todoDialog.close();
        }
    });

    todoDialog.addEventListener('close', () => {
        if (todoConfirmed) {
            const priority = lowPriorityRadio.checked ? 'Low' : midPriorityRadio.checked ? 'Mid' : 'High';
            const todo = createTodo(
                titleInput.value,
                descriptionInput.value,
                dateInput.value,
                priority);

            const project = projects[selectDropdown.value];
            project.addTodo(todo);
            render(projects);
            addEvents();
        }
        titleInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
        lowPriorityRadio.checked = false;
        midPriorityRadio.checked = false;
        highPriorityRadio.checked = false;
    });

    function validateAllTodoFieldsEntered(title, description, date,
        lowRadio, midRadio, highRadio) {
        if (!title) {
            return 'Please enter a title for your todo.';
        } else if (!description) {
            return 'Please enter a description for your todo.';
        } else if (!date) {
            return 'Please select a due date';
        } else if (!lowRadio.checked &&
            !midRadio.checked &&
            !highRadio.checked) {
            return 'Please select a priority.';
        }
        return '';
    }
})();