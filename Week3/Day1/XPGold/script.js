const myTable = document.getElementsByTagName('table')[0];
const elt1 =myTable.firstElementChild.children;
// console.log(elt1)


for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
       const elt = myTable.firstElementChild.children[i].children[j];
       if (i === j) {
        elt.style.color = "red";
       }
        console.log(elt);
    }
}