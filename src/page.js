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

    const formHeading = document.createElement('h1');
    formHeading.classList.add('general');
    formHeading.textContent = 'Create Project';
    projectForm.appendChild(formHeading);

    const projectNameDiv = document.createElement('div');
    projectNameDiv.classList.add('form-div');

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