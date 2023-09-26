import './style.css';

function loadPage() {
    document.body.classList.add('general');
    document.body.classList.add('flexcolumn');
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
    projectForm.classList.add('form');

    const projectFormHeading = document.createElement('h1');
    projectFormHeading.classList.add('general');
    projectFormHeading.textContent = 'Create Project';
    projectForm.appendChild(projectFormHeading);

    const projectNameDiv = document.createElement('div');
    projectNameDiv.classList.add('form-div');
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
    projectBtnDiv.classList.add('form-div');
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
    todoForm.classList.add('form');

    const todoFormHeading = document.createElement('h1');
    todoFormHeading.classList.add('general');
    todoFormHeading.textContent = 'Add a Todo';
    todoForm.appendChild(todoFormHeading);

    // TODO: Add a way to select the project

    const todoTitleDiv = document.createElement('div');
    todoTitleDiv.classList.add('form-div');
    todoTitleDiv.classList.add('space-between-div');

    const todoTitleLabel = document.createElement('label');
    todoTitleLabel.setAttribute('for', 'title');
    todoTitleLabel.textContent = 'Title:';
    todoTitleDiv.appendChild(todoTitleLabel);

    const todoTitleInput = document.createElement('input');
    todoTitleInput.setAttribute('type', 'text');
    todoTitleInput.setAttribute('id', 'title');
    todoTitleInput.setAttribute('name', 'title');
    todoTitleInput.classList.add('form-input');
    todoTitleDiv.appendChild(todoTitleInput);

    todoForm.appendChild(todoTitleDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('form-div');
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
    dateDiv.classList.add('form-div');
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
    priorityDiv.classList.add('form-div');
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
    todoBtnDiv.classList.add('form-div');
    todoBtnDiv.classList.add('space-evenly-div');

    const todoCancelBtn = document.createElement('button');
    todoCancelBtn.setAttribute('id', 'todoCancel');
    todoCancelBtn.setAttribute('type', 'button');
    todoCancelBtn.classList.add('form-button');
    todoCancelBtn.textContent = 'Cancel';
    todoBtnDiv.appendChild(todoCancelBtn);

    const todoConfirmBtn = document.createElement('button');
    todoConfirmBtn.setAttribute('id', 'projectConfirm');
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

function render() {

}

export { loadPage, render };