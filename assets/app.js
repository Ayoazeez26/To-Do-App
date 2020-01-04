const addTaskBtn = document.querySelector('#submit-task');

addTaskBtn.addEventListener('click', addTaskToList);

function addTaskToList(e) {
    e.preventDefault();

    const task = document.getElementById('textarea').value;

    const addTask = document.querySelector('#add-task');

    const li = document.createElement('li');

    const link = document.createElement('a');

    link.textContent = 'X';

    var a = document.createAttribute("class");
    
    a.value = "cancel-task";

    link.setAttributeNode(a);
    
    li.textContent = task;

    li.appendChild(link);

    addTask.appendChild(li);

    addToLocalStorage(task);

    this.reset();
}

function addToLocalStorage(task) {
    let storedTask = localStorage.getItem('taskToDo');

    storedTask = storedTask ? storedTask.split(',') : [];

    storedTask.push(task);

    localStorage.setItem('taskToDo', storedTask.toString());
}