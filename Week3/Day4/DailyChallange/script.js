const tasks = [];

const form = document.querySelector("#addItem");
const listOfTasks = document.querySelector(".listTasks");
// console.log(listOfTasks);

form.addEventListener("submit", addTask);

function addTask (e) {
    e.preventDefault();
    let task = form.newTask.value;
    // console.log(task);
    if (task != "") {
        const taskElt = {
            textName : task,
            done : false,
        }
        tasks.push(taskElt);
        // console.log(tasks);
        taskDiv = createNewTask(task);
        listOfTasks.appendChild(taskDiv);
        form.newTask.value = "";
    }
}

function createNewTask (textTask){
    const newDiv = document.createElement("div");
    newDiv.classList.add("task");
    const xMark = document.createElement("i");
    xMark.classList.add("fa-regular")
    xMark.classList.add("fa-circle-xmark");
    xMark.addEventListener("click", deleteItem);
    newDiv.appendChild(xMark);
    const checkDone = document.createElement("input");
    checkDone.setAttribute("type", "checkbox");
    checkDone.addEventListener("input", check);
    newDiv.appendChild(checkDone);
    newDiv.appendChild(document.createTextNode(textTask));
    // console.log(newDiv);
    return newDiv;
}

function findObj (txt) {
    for (i in tasks) {
        if (tasks[i].textName == txt) {
            console.log(i);
            return i;
        }
    }
}

function check (e) {
    const parent = e.target.parentElement;
    parent.classList.toggle("lineThrough");
    const txt = parent.textContent;
    const eltInList = tasks[findObj(txt)];
    eltInList.done ? eltInList.done = false: eltInList.done = true;
    console.log(eltInList);

} 

function deleteItem (e) {
    console.log("delete");
    const parent = e.target.parentElement;
    const txt = parent.textContent;
    tasks.splice(findObj(txt), 1);
    console.log(parent);
    parent.remove();
}

// function refreshList () {
//     console.log("List is refreshing");
//     const allTasks = listOfTasks.children
//     for (tsk of allTasks) {
//         console.log(`deleting ${tsk.textContent}`);
//         tsk.remove();
//     }
//     for (tsk of tasks) {
//         createNewTask(tsk.textName);
//     }
// }