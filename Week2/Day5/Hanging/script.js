function getTheWord (){
    const pattern = /\d|W|\s|_/
    let w = "";
    while (pattern.test(w) || w == null || w.length < 8) {
        w = prompt("Player 1, enter the word that is not less then 8 digits");
        if (w != null && pattern.test(w)) {
            alert("Sorry, your word contains forbidden symbols");
        }
        if (w == null) {
            alert("Sorry, this id mandatory for the game!");
        }
        if (w != null && w.length < 8) {
            alert("Sorry, should be not less then 8 caracters!");
        }
    }
    return w;
}
function getTheGuess () {
    const pattern2 = /^.$/
    const pattern = /\d|W|\s|_/
    let s = "";
    while (!pattern2.test(s) || s == null || pattern.test(s)) {
        s = prompt("Player 2, enter your guess. 1 letter a-z only!");
        if (s != null && pattern.test(s)) {
            alert("Sorry, your word contains forbidden symbols");
        }
        if (s == null) {
            alert("Sorry, this is mandatory for the game!");
        }
        if (s != null && !pattern2.test(s)) {
            alert("Sorry, should be one letter!");
        }
        if (s == "stop") {
            break;
        }
    }
    return s;

}

let secretWord = getTheWord();
let currentKnolage = "*".repeat(secretWord.length);
let currentKnolageArr = currentKnolage.split("");
console.log(currentKnolage);
let attempts = [];
let attemtsLeft = 10;
let guessed = 0;

while (attemtsLeft > 0 && guessed != secretWord.length) {
    guess = getTheGuess();
    pos = attempts.indexOf(guess);
    if (pos != -1) {
        alert(`You already asked ${guess} on yuor ${pos + 1} attempt. Try again.`);
        continue;
    } else  {
        attempts.push(guess);
        let posW = secretWord.indexOf(guess);
        if (posW != -1) {
            "Right!"
        } 
        while (posW != -1) {
            currentKnolageArr[posW] = guess;
            guessed++;
            posW = secretWord.indexOf(guess, posW + 1);
        }
        console.log(currentKnolageArr.join(''));
        attemtsLeft--;
        
    }
    if (guessed === secretWord.length) {
        alert("You win!");
    } else if (attemtsLeft === 0) {
        alert("You loose!");
    }
    console.log(`Your attempts: ${attempts.join(' ')}`);
    
}






//console.log(getTheWord ());
//console.log(getTheGuess ());

