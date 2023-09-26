import { loadPage, render } from "./page";

(function () {
    const createTodo = (title, description, dueDate, priority) => {
        return {title, description, dueDate, priority, completed: false};
    };

    const createProject = (name) => {
        const todos = [];
        const addTodo = (todo) => {
            todos.push(todo);
        };
        const deleteTodo = (idx) => {
            todos.splice(idx, 1);
        };
        return {name, addTodo, deleteTodo};
    };

    const projects = [];
    const defaultProject = createProject('My Project');
    projects.push(defaultProject);

    loadPage();

    const projectDialog = document.getElementById('projectDialog');

    const addProjectBtn = document.getElementById('addProject');
    addProjectBtn.addEventListener('click', () => {
        projectDialog.showModal();
    });
})();