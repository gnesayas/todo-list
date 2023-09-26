import './style.css';

function loadPage() {
    document.body.classList.add('general');
    document.body.classList.add('flexcolumn');
    document.body.style.height = '100vh';
    document.body.style.width = '100vw';

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    document.body.appendChild(projectDiv);

    const addingDiv = document.createElement('div');
    addingDiv.classList.add('adding-div');
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('adding-btn');
    projectBtn.textContent = 'Create Project';
    const todoBtn = document.createElement('button');
    todoBtn.classList.add('adding-btn');
    todoBtn.textContent = 'Add Todo';
    addingDiv.appendChild(projectBtn);
    addingDiv.appendChild(todoBtn);
    document.body.appendChild(addingDiv);
}

function render() {

}

export { loadPage, render };