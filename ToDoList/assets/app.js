class List {
    constructor(task) {
        this.task = task;
    }
}

class UI {
    addTaskToDOM(list) {
        let addTask = document.querySelector('#add-task');
        const row = document.createElement('tr');
        row.innerHTML = 
            `<td>${list.task}</td>
             <td><a href="#" class="delete">X</td>
        `;
        addTask.appendChild(row);
    }
    
    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('#container');
        // Get form
        const row = document.querySelector('.header');
        // Insert alert
        container.insertBefore(div, row);

        // Timeout after 3 sec
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    clearField() {
        document.getElementById('input').value = '';
    }

    deleteTask(task) {
        task.parentElement.parentElement.remove();
    }

    clearTasks(task) {
        task.parentElement.children[1].remove();
    }

}

class Store {
    static getTasks() {
        let tasks;
        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    static displayTasks() {
        const tasks = Store.getTasks();

        tasks.forEach(task => {
            const ui = new UI;

            ui.addTaskToDOM(task);
        });
    }

    static addTask(task) {
        const tasks = Store.getTasks();

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask(task) {
        console.log(task);
        const tasks = Store.getTasks();

        tasks.forEach( (current, index) => {
            if(current.task === task) {
                tasks.splice(index, 1);
            }
        });
    
        localStorage.setItem('tasks',  JSON.stringify(tasks));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayTasks);

document.getElementById('submit-task').addEventListener('click', (e) => {
    const task = document.getElementById('input').value;
    const list = new List(task);
    const ui = new UI();
    if(task === '') {
        ui.showAlert('Please input a task', 'error');
    } else {
        ui.addTaskToDOM(list);
        Store.addTask(list);
        ui.showAlert('Task Added', 'success');
        ui.clearField();
    }

    e.preventDefault();
});

document.querySelector('#added-tasks').addEventListener('click', (e) => {
    const ui = new UI();
    if(e.target.classList.contains('delete')) {
        ui.deleteTask(e.target);

        ui.showAlert('Task Removed!!', 'success');

        Store.removeTask(e.target.parentElement.previousElementSibling.textContent);

    } else if(e.target.classList.contains('clear-task')) {
        ui.clearTasks(e.target);

        ui.showAlert('List Cleared!!', 'success');
    }
});

/*
const placeholder = document.getElementById('add-task');

// ADD TASK TO DOM

document.getElementById('submit-task').addEventListener('click', function(e) {
    e.preventDefault();

    let task = document.getElementById('input').value;
    if(task === '') {
        alert('Input a task!');
    } else {
        addTaskToDOM(task);
    }
});

function addTaskToDOM(task) {
    // DYNAMICALLY CREATING THE LIST
    const div = document.createElement('div');
    const line = document.createElement('div');
    line.classList.add('line');
    div.classList.add('item-div');
    const showTask = document.createElement('p');
    showTask.style.margin = '8px 0';
    const link = document.createElement('a');
    link.classList.add('cancel-task');
    showTask.textContent = task;
    link.textContent = 'X';
    div.appendChild(showTask);
    div.appendChild(link);
    div.appendChild(line);
    placeholder.appendChild(div);
    addTaskToLS(task);

}

// LOAD TASKS FROM THE LOCAL STORAGE ON PAGE LOAD

document.addEventListener('DOMContentLoaded', loadFromLS);

function loadFromLS() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach( current => {
        // DYNAMICALLY CREATING THE LIST
        const div = document.createElement('div');
        const line = document.createElement('div');
        line.classList.add('line');
        div.classList.add('item-div');
        const showTask = document.createElement('p');
        showTask.style.margin = '8px 0';
        const link = document.createElement('a');
        link.classList.add('cancel-task');
        showTask.textContent = current;
        link.textContent = 'X';
        div.appendChild(showTask);
        div.appendChild(link);
        div.appendChild(line);
        placeholder.appendChild(div);
    });

    console.log(tasks);
}


// ADD TASK TO LOCAL STORAGE

function addTaskToLS(task) {
    let tasks;

// GET TASKS FROM LOCAL STORAGE AND SET TO EMPTY ARRAY IF TASKS IS NULL
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

   localStorage.setItem('tasks',  JSON.stringify(tasks));

   alert('Task Added!');
}


// REMOVE TASK FROM DOM

document.querySelector('#added-tasks').addEventListener('click', removeItemFromDOM);

function removeItemFromDOM(event) {
    event.target.parentElement.remove();

    removeTaskFromLS(event.target.parentElement.children[0].textContent);
}

// REMOVE TASK FROM LOCAL STORAGE

function removeTaskFromLS(item) {
    let tasks;
    
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach( (current, index) => {
        if(current == item) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks',  JSON.stringify(tasks));

}
*/
/*
function reverseString(str) {
    let finalArr = [];
    let strArr = str.split(' ');
    let indArr = strArr.map(el => el.split('') );
    indArr.forEach(element => {
        while (element.length > 0) {
            let popped = element.pop();
            finalArr.push(popped);
        }
        finalArr.push(' ');
    });
    let result = finalArr.join('');
    return result;
}

console.log(reverseString('I have many books'));
*/

