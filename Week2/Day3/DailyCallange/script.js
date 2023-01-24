const numStrings = 6;
let res = "";
for (let i = 0; i < numStrings; i++) {
   res += "*".repeat(i+1) + "\n";
}
console.log (res);

let res2 = "";
for (let i = 0; i < numStrings; i++) {
    for (let j=0; j<i+1; j++) {
        res2 += "*";
    }
   res2 += "\n";
}
console.log (res2);