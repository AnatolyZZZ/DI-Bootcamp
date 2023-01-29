// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.


allBooks = [];

book1 = {
    title : "book1",
    author : "Name1",
    image : "face1.jpg",
    alreadyRead : true
}

book2 = {
    title : "book2",
    author : "Name2",
    image : "face2.jpg",
    alreadyRead : false
}


allBooks.push(book1);
allBooks.push(book2);

const myDiv = document.getElementsByClassName("listBooks")[0];

const myTable = document.createElement("table");
for (book of allBooks) {
    const curRow = document.createElement("tr");
    const data1 = document.createElement("td");
    const data2 = document.createElement("td");
    const data3 = document.createElement("img");
    data3.setAttribute('src', book.image);
    data3.style.width = "100px";
    data1.textContent = book.title;
    data2.textContent = book.author;
    curRow.appendChild(data1);
    curRow.appendChild(data2);
    curRow.appendChild(data3);
    myTable.appendChild(curRow);
    if (book.alreadyRead) {
        curRow.style.color = "red";
    }
}

myDiv.appendChild(myTable);
console.log(myTable.children[0].firstChild.textContent);