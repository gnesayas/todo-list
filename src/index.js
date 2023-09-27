import { loadPage, render } from './page';

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
        document.querySelectorAll('.deleteProject').forEach(button => {
            button.addEventListener('click', (e) => {
                projects.splice(e.target.dataset.projectKey, 1);
                repopulateProjectSelect();
                render(projects);
                addDeleteProjectEvents();
            })
        });
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
            addDeleteProjectEvents();
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
        const unenteredFieldMessage = validateAllTodoFieldsEntered();
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
            addDeleteProjectEvents();
        }
        titleInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';
        lowPriorityRadio.checked = false;
        midPriorityRadio.checked = false;
        highPriorityRadio.checked = false;
    });

    function validateAllTodoFieldsEntered() {
        if (!titleInput.value) {
            return 'Please enter a title for your todo.';
        } else if (!descriptionInput.value) {
            return 'Please enter a description for your todo.';
        } else if (!dateInput.value) {
            return 'Please select a due date';
        } else if (!lowPriorityRadio.checked &&
            !midPriorityRadio.checked &&
            !highPriorityRadio.checked) {
            return 'Please select a priority.';
        }
        return '';
    }
})();