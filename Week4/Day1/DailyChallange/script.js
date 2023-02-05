const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
//    Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
let newarr1 = [];
let newarr2 = [];
let total = 0;

const newName = function (obj, thearray) {
    let name = obj.username;
    name += "!";
    thearray.push(name);
}
gameInfo.forEach((obj) => newName(obj, newarr1));
console.log(newarr1);

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 
gameInfo.forEach(
    (obj) => {
        obj.score > 5 ? newarr2.push(obj.username) : "";
        total += obj.score;
    } 
)
console.log(newarr2);
console.log(total);