z = [1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  }); // [2,4,6]



z2 = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  ); 
//   [1, 2, 0, 1, 2, 3]

console.log(z2);

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })

// Using a method, take this array 
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

// array.map(elt => ...elt);
res = [];
res2 = [];
for (i = 0; i<array.length; i++) {
 res.push(...array[i]);
}
for (i = 0; i<res.length; i++) {
    if(i>2) {
        res2.push(...res[i]);
    } else {
        res2.push(res[i]);
    }
   }


console.log(res2);
// and modify it to look like this array: [1,2,3,[4],[5]]. 
// Bonus Try to do it on one line.
// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.map(elt => elt.reduce((acc,elt) => acc+=" "+elt)));

console.log(greeting.map(elt => elt.reduce((acc,elt) => acc+=" "+elt)).reduce((acc,elt) => acc+=" "+elt))

function F (arr) {
    if ( typeof(arr[0]) === "number") {
        return arr;
    } else return F(...arr);
}
console.log(F([[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]));