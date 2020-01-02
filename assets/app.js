const task = document.getElementById('textarea').value;

const addTaskBtn = document.querySelector('#submit-task');

addTaskBtn.addEventListener('click', addTaskToList);

function addTaskToList(e) {
    e.preventDefault();

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
}