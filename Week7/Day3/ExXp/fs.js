const fs = require('fs');

const text = fs.readFileSync("text.txt", 'utf8');
console.log(text);

const newtext = text+"\nAdded a string\n"

const new_file = fs.appendFile('newfile.txt', '', (err) => {
    if (err) return console.log(err);
    console.log("created newfile")
})

const new_file2 = fs.appendFileSync('newfile2.txt', "");


fs.appendFile('newfile.txt', newtext, (err) => {
    if (err) return console.log(err);
    console.log("added a string to a newfile");
})

fs.appendFile('newfile.txt', "And another one", (err) => {
    if (err) return console.log(err);
    console.log("added a string to a newfile")
})

fs.unlinkSync('newfile2.txt', (err) =>{
    if (err) return console.log(err);
    console.log("file deleted");
})
