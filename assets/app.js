const taskList = document.querySelector('#added-tasks');
const ul = document.querySelector('#add-task');
const textArea = document.getElementsByTagName('textarea');

document.querySelector('#submit-task').addEventListener('click', addTaskToList);

taskList.addEventListener('click', removeTaskFromList);

document.addEventListener('DOMContentLoaded', loadTasks);

// Create li

const taskLi = action => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = 'X';
    var a = document.createAttribute("class");
    a.value = "cancel-task";
    link.setAttributeNode(a);
    li.textContent = action;
    li.appendChild(link);
    ul.appendChild(li);
}

// Add Task

function addTaskToList(e) {
    e.preventDefault();

    taskLi(textarea.value);

    addToLocalStorage(textarea.value);
    
    textarea.value = '';
}

// Add task to locale storage

function addToLocalStorage(task) {
    let storedTask = localStorage.getItem('taskToDo');

    storedTask = storedTask ? storedTask.split(',') : [];

    storedTask.push(task);

    localStorage.setItem('taskToDo', JSON.stringify(storedTask));
}

// Remove task

function removeTaskFromList(e) {
    if(e.target.classList.contains('cancel-task')) {
        e.target.parentElement.remove();
    }
}

// Load from local storage 

function loadTasks() {
    const data = JSON.parse(localStorage.getItem('taskToDo'));
    data.forEach(item => {
        taskLi(item);
    })
}