const taskList = document.querySelector('#added-tasks');
const ul = document.querySelector('#add-task');
let taskArea = document.getElementById('textarea');
let taskText = taskArea.value;

document.querySelector('#submit-task').addEventListener('click', addTaskToList);

taskList.addEventListener('click', removeTaskFromList);

document.addEventListener('DOMContentLoaded', loadLS);

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

// Print out local storage tasks on load
function loadLS() {
    let tasks = loadTasks();

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = 'X';
        var a = document.createAttribute("class");
        a.value = "cancel-task";
        link.setAttributeNode(a);
        li.textContent = task;
        li.appendChild(link);
        ul.appendChild(li);
    })
}

// Add Task

function addTaskToList(e) {

    e.preventDefault();

    taskLi(taskArea.value);

    addToLocalStorage(taskArea.value);

    taskArea.value = "";
    
}

// Add task to locale storage

function addToLocalStorage(taskText) {
    let tasks = loadTasks();

    tasks.push(taskText);

    localStorage.setItem('taskToDo', JSON.stringify(tasks));
}

// Load from local storage 

function loadTasks() {
    let tasks;
    const taskLS = localStorage.getItem('taskToDo');
    if(taskLS === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(taskLS);
    }
    return tasks;
}

// Remove task

function removeTaskFromList(e) {
    if(e.target.classList.contains('cancel-task')) {
        e.target.parentElement.remove();
    }

    removeFromLS(e.target.parentElement.textContent);
}


// Remove from local storage

function removeFromLS(task) {
    let tasks = loadTasks();

    const taskDelete = task.substring(0, task.length -1);

     tasks.forEach(function(taskLS, index) {
         if(taskDelete === taskLS) {
            tasks.splice(index, 1)
         }
     });

     localStorage.setItem('taskToDo', JSON.stringify(tasks));



//     let tasks = JSON.parse(localStorage.getItem('taskToDo'));

//     const deleteTask = task.substring(0, task.length -1);

//     let updatedList = tasks.map(function(task,item) {
//         if(deleteTask != task) {
//             return task;
//         }
//     })

//     console.log(updatedList);
//     // tasks.forEach(function(taskLS, index) {
//     //     if(deleteTask === taskLS) {
//     //         tasks.splice(index, 1);
//     //     }
//     // });

//     localStorage.setItem('taskToDo', JSON.stringify(updatedList));
}