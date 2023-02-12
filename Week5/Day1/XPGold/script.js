const main = document.querySelector("#main");

// const s = "?name=John&lastname=Doe";
let s = window.location.href;
const ind = s.indexOf("?");
s = s.slice(ind, -1);

const urlSP =  new URLSearchParams(s);
const arr = Array.from(urlSP)

const text = `${arr[0][0]}:${arr[0][1]}, ${arr[1][0]}:${arr[1][1]}`;
main.append(text);

console.log(arr);