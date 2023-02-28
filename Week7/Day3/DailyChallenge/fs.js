const fs = require('fs');

const text = fs.readFileSync('RightLeft.txt', 'utf8');

let p = 0
for (let char of text) {
    if (char === ">") {
        p++;
    } else if (char === "<") {
        p--;
    }
}
console.log(`Final position is ${p}`);

function firstLeft (txt) {
    let p = 0;
    let count = 0;
    for (let char of txt) {
        if (char === ">") {
            p++;
        } else if (char === "<") {
            p--;
        }
        count++;
        if (p === -1) {
            return count
        }
    }

}
console.log(`In -1 in ${firstLeft(text)} steps`);