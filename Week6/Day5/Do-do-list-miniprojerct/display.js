const erase = document.querySelector("#erase");
const section = document.querySelector('#alltasks')
erase.addEventListener('click', eraseMemory);
const confirmation = document.querySelector('#confirmation');

let arrayOfTasks = JSON.parse(window.localStorage.getItem('tasks')) || [];
const yesB = confirmation.childNodes[1];
const noB = confirmation.childNodes[3];


function eraseMemory () {
    if (confirm("Are u shure?!")) {
        window.localStorage.clear();
        section.innerHTML ="";
    }
}

function sortTasks () {
    arrayOfTasks.sort((a, b) => Date.parse(a.startdate) - Date.parse(b.startdate));
    window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
}

function displayTask (task) {
    const div = document.createElement('div');
    div.setAttribute('id', task.id);
    div.classList.add("task");
    div.addEventListener('dblclick', displayDesctipton);
    const checkb = document.createElement('input');
    checkb.setAttribute('type', 'checkbox');
    if (task.isCompleted) {
        div.classList.add("done");
        checkb.checked = true;
    }
    if (!task.isCompleted && Date.parse(task.enddate) - Date.now() < 0) {
        div.classList.add("delayed");
    }
    
    checkb.addEventListener('input', complete);
    function complete () {
        div.classList.toggle("done");
        task.isCompleted = !task.isCompleted;
        window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
    }
    const nm = document.createElement('p');
    nm.classList.add("name")
    nm.appendChild(document.createTextNode(task.name));
    const left = document.createElement('p');
    const daysleft = Math.round((Date.parse(task.enddate) - Date.now())/1000/60/60/24);
    left.appendChild(document.createTextNode(`${daysleft} days left`));

    const info = document.createElement('div');
    const description = document.createElement('p');
    description.appendChild(document.createTextNode(task.description));
    const del = document.createElement('button');
    del.appendChild(document.createTextNode("Delete"));
    del.classList.add('delbtn');
    del.addEventListener('click', deleteCurrentTask);
    info.append(description, del);
    info.classList.add('invisible');

    div.append(checkb, nm, left, info);
    section.append(div);
}

// function confirmDel () {
//     const d = new Promise (function (resolve, reject) {
//         yesB.addEventListener('click', confirmSmth);
//         noB.addEventListener('click', rejectSmth);
//         function confirmSmth() {
//             console.log("confermed");
//             resolve("Resolved");
//         }
//         function rejectSmth() {
//             console.log('rejected');
//             reject('rejected');
//         }
//         })
//     return d;
// }

function confirmDel () {
    const d = new Promise (function (resolve, reject) {
        yesB.addEventListener('click', resolve, "confiremed");
        noB.addEventListener('click', reject, "rejected");
        })
    return d;
}

async function deleteCurrentTask (e) {
    confirmation.classList.remove('invisible');

    try {
        const d = await confirmDel(); 
        const task = e.target.parentElement.parentElement;
        const id = +task.getAttribute('id');
        arrayOfTasks.splice(arrayOfTasks.findIndex(elt => elt.id === id), 1);
        console.log(arrayOfTasks);
        window.localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
        task.remove();
    } catch {
        console.log("catch worked")
    } finally {
        confirmation.classList.add('invisible');
    }


}

function displayDesctipton (e) {
    console.log(e.currentTarget.childNodes[2]);
    e.currentTarget.childNodes[3].classList.toggle('invisible');
}

(function displayAllTasks () {
    console.log(arrayOfTasks)
    sortTasks();
    for (task of arrayOfTasks) {
        displayTask(task);
    }
})()



