const theForm = document.forms[0];
const alert_ = document.querySelector("#alert");
let arrayOfTasks = JSON.parse(window.localStorage.getItem('tasks')) || [] ;
let taskId = JSON.parse(window.localStorage.getItem('taskId')) || 1000;


theForm.addEventListener('submit', addTask);
document.addEventListener('click', removeAlert);

function removeAlert () {
    alert_.classList.add('invisible');
}

function taskValidation (obj) {
    if (Date.now() - Date.parse(obj.enddate) > 0) {
        alert_.innerHTML = "End date could't be in past!!!!";
        alert_.classList.remove('invisible');
        return false;
    }
    if ( Date.parse(obj.enddate) - Date.parse(obj.startdate) < 0) {
        alert_.innerHTML = "End date could't be earlier then start!!!!";
        alert_.classList.remove('invisible');
        return false;
    }
    if (obj.name == "") {
        alert_.innerHTML = "Name couldn't be empty!!!!";
        alert_.classList.remove('invisible');
        return false;
    }
    if (obj.enddate == "") {
        alert_.innerHTML = "State end date atleast";
        alert_.classList.remove('invisible');
        return false;
    }

    return true;
}

function addTask (e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const obj = Object.fromEntries(fd);
    if (taskValidation(obj)) {
        obj['id'] = taskId;
        obj['isCompleted'] = false;
        taskId++;
        window.localStorage.setItem('taskId', JSON.stringify(taskId));
        arrayOfTasks.push(obj);
        window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
        alert_.innerHTML = "Task was successfuly added";
        alert_.classList.remove('invisible');
    }
    
}

