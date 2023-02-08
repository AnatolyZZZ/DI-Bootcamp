const menu = [
    {
      type : "starter",
      name : "Houmous with Pita"
    },
    {
      type : "starter",
      name : "Vegetable Soup with Houmous peas"
    },
    {
      type : "dessert",
      name : "Chocolate Cake"
    }
  ]

//   Using an array method and ternary operator, check if at least one element in the menu array is a dessert.

console.log(menu.some(elt => elt.type === "dessert"))

// Using an array method, check if all the elements in the array are starters.

console.log(menu.every(elt => elt.type === "starter"));

// Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.

if (!menu.some(elt => elt.type === "main course")) {
    menu.push({type: "main course", name : "bolognese"});
}

// console.log(menu);

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.

menu.forEach(elt => {
    nameArr = elt.name.split(" ");
    veg = false;
    for (ingredient of vegetarian) {
        if (nameArr.some(elt => elt.toLowerCase() === ingredient)) {
            veg = true;
        }
    }
    elt["vegetarian"] = veg;
})

console.log(menu);

const string_chop = (str, size) => {
    let arr = [];
    // debugger;
    for (let start = 0; start < str.length; ) {
        // let end = (start + size < str.length) ? start + size : -1;
        let end = start + size;
        arr.push(str.slice(start, end));
        start = end;
    }
    return arr;
}

console.log(string_chop('developer',2)); 
// ["de", "ve", "lo", "pe", "r"] 

const search_word = (str, word) => {
    strArr = str.split(" ");
    times = strArr.filter(elt => elt === word).length;
    return `\'${word}\' was found ${times} times`
}

console.log(search_word('The quick fox brown fox', 'fox')); 
// "'fox' was found 1 times."

const reverseArray = (arr) => {
    newArr = [...arr];
   return newArr.reverse();
}
const testArr = [1,2];
reverseArray(testArr);

console.log(reverseArray([1,2,3,4,5]) )// [5,4,3,2,1]
console.log(reverseArray([1,2]) )// [2,1]
console.log(reverseArray([]) )// []
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]) )// [10,9,8,7,6,5,4,3,2,1]
console.log(testArr);
