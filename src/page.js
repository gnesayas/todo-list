import './style.css';

function loadPage(projects) {
    document.body.classList.add('general');
    document.body.classList.add('body');
    document.body.style.height = '100vh';
    document.body.style.width = '100vw';

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    document.body.appendChild(projectDiv);

    const projectDialog = document.createElement('dialog');
    projectDialog.setAttribute('id', 'projectDialog');
    projectDialog.classList.add('general');
    projectDialog.classList.add('dialog');

    const projectForm = document.createElement('form');
    projectForm.classList.add('flexcolumn');

    const projectFormHeading = document.createElement('h1');
    projectFormHeading.classList.add('general');
    projectFormHeading.textContent = 'Create Project';
    projectForm.appendChild(projectFormHeading);

    const projectNameDiv = document.createElement('div');
    projectNameDiv.classList.add('line-div');
    projectNameDiv.classList.add('space-evenly-div');

    const projectNameLabel = document.createElement('label');
    projectNameLabel.setAttribute('for', 'name');
    projectNameLabel.textContent = 'Project Name:';
    projectNameDiv.appendChild(projectNameLabel);

    const projectNameInput = document.createElement('input');
    projectNameInput.setAttribute('type', 'text');
    projectNameInput.setAttribute('id', 'name');
    projectNameInput.setAttribute('name', 'name');
    projectNameInput.classList.add('form-input');

    projectNameDiv.appendChild(projectNameInput);
    projectForm.appendChild(projectNameDiv);

    const projectBtnDiv = document.createElement('div');
    projectBtnDiv.classList.add('line-div');
    projectBtnDiv.classList.add('space-evenly-div');

    const projectCancelBtn = document.createElement('button');
    projectCancelBtn.setAttribute('id', 'projectCancel');
    projectCancelBtn.setAttribute('type', 'button');
    projectCancelBtn.classList.add('form-button');
    projectCancelBtn.textContent = 'Cancel';
    projectBtnDiv.appendChild(projectCancelBtn);

    const projectConfirmBtn = document.createElement('button');
    projectConfirmBtn.setAttribute('id', 'projectConfirm');
    projectConfirmBtn.setAttribute('type', 'submit');
    projectConfirmBtn.classList.add('form-button');
    projectConfirmBtn.textContent = 'Confirm';

    projectBtnDiv.appendChild(projectConfirmBtn);
    projectForm.appendChild(projectBtnDiv);
    projectDialog.appendChild(projectForm);
    document.body.appendChild(projectDialog);

    const todoDialog = document.createElement('dialog');
    todoDialog.setAttribute('id', 'todoDialog');
    projectDialog.classList.add('general');
    projectDialog.classList.add('dialog');

    const todoForm = document.createElement('form');
    todoForm.classList.add('flexcolumn');

    const todoFormHeading = document.createElement('h1');
    todoFormHeading.classList.add('general');
    todoFormHeading.textContent = 'Add a Todo';
    todoForm.appendChild(todoFormHeading);

    const selectDiv = document.createElement('div');
    selectDiv.classList.add('line-div');
    selectDiv.classList.add('space-between-div');

    const selectLabel = document.createElement('label');
    selectLabel.setAttribute('for', 'select');
    selectLabel.textContent = 'Project:';
    selectDiv.appendChild(selectLabel);

    const selectDropdown = document.createElement('select');
    selectDropdown.setAttribute('id', 'select');

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        const option = document.createElement('option');
        option.setAttribute('value', i);
        option.textContent = project.name;
        selectDropdown.appendChild(option);
    }

    selectDiv.appendChild(selectDropdown);
    todoForm.appendChild(selectDiv);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('line-div');
    titleDiv.classList.add('space-between-div');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title:';
    titleDiv.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.classList.add('form-input');

    titleDiv.appendChild(titleInput);
    todoForm.appendChild(titleDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('line-div');
    descriptionDiv.classList.add('space-between-div');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description:';
    descriptionDiv.appendChild(descriptionLabel);

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'description');
    descriptionInput.classList.add('form-input');

    descriptionDiv.appendChild(descriptionInput);
    todoForm.appendChild(descriptionDiv);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('line-div');
    dateDiv.classList.add('space-between-div');

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.textContent = 'Due Date:';
    dateDiv.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('name', 'date');

    dateDiv.appendChild(dateInput);
    todoForm.appendChild(dateDiv);

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('line-div');
    priorityDiv.classList.add('space-between-div');

    const priorityParagraph = document.createElement('p');
    priorityParagraph.textContent = 'Priority:';
    priorityParagraph.classList.add('general');
    priorityDiv.appendChild(priorityParagraph);

    const lowPriorityLabel = document.createElement('label');
    lowPriorityLabel.setAttribute('for', 'low');
    lowPriorityLabel.textContent = 'Low';
    priorityDiv.appendChild(lowPriorityLabel);

    const lowPriorityInput = document.createElement('input');
    lowPriorityInput.setAttribute('type', 'radio');
    lowPriorityInput.setAttribute('id', 'low');
    lowPriorityInput.setAttribute('name', 'priority');
    lowPriorityInput.setAttribute('value', 'low');
    priorityDiv.appendChild(lowPriorityInput);

    const midPriorityLabel = document.createElement('label');
    midPriorityLabel.setAttribute('for', 'mid');
    midPriorityLabel.textContent = 'Mid';
    priorityDiv.appendChild(midPriorityLabel);

    const midPriorityInput = document.createElement('input');
    midPriorityInput.setAttribute('type', 'radio');
    midPriorityInput.setAttribute('id', 'mid');
    midPriorityInput.setAttribute('name', 'priority');
    midPriorityInput.setAttribute('value', 'mid');
    priorityDiv.appendChild(midPriorityInput);

    const highPriorityLabel = document.createElement('label');
    highPriorityLabel.setAttribute('for', 'high');
    highPriorityLabel.textContent = 'High';
    priorityDiv.appendChild(highPriorityLabel);

    const highPriorityInput = document.createElement('input');
    highPriorityInput.setAttribute('type', 'radio');
    highPriorityInput.setAttribute('id', 'high');
    highPriorityInput.setAttribute('name', 'priority');
    highPriorityInput.setAttribute('value', 'high');

    priorityDiv.appendChild(highPriorityInput);
    todoForm.appendChild(priorityDiv);

    const todoBtnDiv = document.createElement('div');
    todoBtnDiv.classList.add('line-div');
    todoBtnDiv.classList.add('space-evenly-div');

    const todoCancelBtn = document.createElement('button');
    todoCancelBtn.setAttribute('id', 'todoCancel');
    todoCancelBtn.setAttribute('type', 'button');
    todoCancelBtn.classList.add('form-button');
    todoCancelBtn.textContent = 'Cancel';
    todoBtnDiv.appendChild(todoCancelBtn);

    const todoConfirmBtn = document.createElement('button');
    todoConfirmBtn.setAttribute('id', 'todoConfirm');
    todoConfirmBtn.setAttribute('type', 'submit');
    todoConfirmBtn.classList.add('form-button');
    todoConfirmBtn.textContent = 'Confirm';

    todoBtnDiv.appendChild(todoConfirmBtn);
    todoForm.appendChild(todoBtnDiv);
    todoDialog.appendChild(todoForm);
    document.body.appendChild(todoDialog);

    const addingDiv = document.createElement('div');
    addingDiv.classList.add('adding-div');

    const projectBtn = document.createElement('button');
    projectBtn.setAttribute('id', 'addProject');
    projectBtn.classList.add('adding-btn');
    projectBtn.textContent = 'Create Project';

    const todoBtn = document.createElement('button');
    todoBtn.setAttribute('id', 'addTodo');
    todoBtn.classList.add('adding-btn');
    todoBtn.textContent = 'Add Todo';

    addingDiv.appendChild(projectBtn);
    addingDiv.appendChild(todoBtn);
    document.body.appendChild(addingDiv);
}

function render(projects) {
    const projectDiv = document.querySelector('.project-div');
    projectDiv.replaceChildren();

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        const projectCard = document.createElement('div');
        projectCard.classList.add('flexcolumn');
        projectCard.classList.add('project-card');

        const projectHeader = document.createElement('h1');
        projectHeader.classList.add('general');
        projectHeader.textContent = project.name;
        projectCard.appendChild(projectHeader);

        for (let j = 0; j < project.getTodoLength(); j++) {
            const todo = project.getTodo(j);

            const todoCard = document.createElement('div');
            todoCard.classList.add('flexcolumn');

            const firstRow = document.createElement('div');
            firstRow.classList.add('line-div');
            firstRow.classList.add('space-between-div');

            const title = document.createElement('h1');
            title.classList.add('general');
            title.textContent = todo.title;
            firstRow.appendChild(title);

            const toggleBtn = document.createElement('button');
            toggleBtn.dataset.projectKey = i;
            toggleBtn.dataset.todoKey = j;
            toggleBtn.textContent = 'Mark Complete';

            firstRow.appendChild(toggleBtn);
            todoCard.appendChild(firstRow);

            const description = document.createElement('p');
            description.classList.add('general');
            description.textContent = todo.description;
            todoCard.appendChild(description);

            const deleteTodoBtn = document.createElement('button');
            deleteTodoBtn.dataset.projectKey = i;
            deleteTodoBtn.dataset.todoKey = j;
            deleteTodoBtn.textContent = 'Delete Todo';
            todoCard.appendChild(deleteTodoBtn);

            const lastRow = document.createElement('div');
            lastRow.classList.add('line-div');
            lastRow.classList.add('space-between-div');

            const dueDate = document.createElement('p');
            dueDate.classList.add('general');
            dueDate.textContent = `Due Date: ${todo.dueDate}`;
            lastRow.appendChild(dueDate);

            const priority = document.createElement('p');
            priority.classList.add('general');
            priority.textContent = `Priority: ${todo.priority}`;

            lastRow.appendChild(priority);
            todoCard.appendChild(lastRow);
            projectCard.appendChild(todoCard);
        }

        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.classList.add('deleteProject');
        deleteProjectBtn.dataset.projectKey = i;
        deleteProjectBtn.textContent = 'Delete Project';

        projectCard.appendChild(deleteProjectBtn);
        projectDiv.appendChild(projectCard);
    }
}

export { loadPage, render };