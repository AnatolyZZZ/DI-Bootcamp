var attempsLeft;

function playTheGame() {
attempsLeft = 3;
    let conf = confirm("Would you like to play the game?")
    if (conf === false) {
        alert("Mo problem, Goodbuy.")
        return 0;
    }
    computerNumber = Math.floor(Math.random() * 11);
    console.log(computerNumber);

    while (attempsLeft > 0) {
       if ( compareNumbers(getUserNumber(), computerNumber) === "win" ) {
        return 0
       } else {
        attempsLeft--;
        if (attempsLeft === 0 ) {
            alert("out of chances");
        }
       }
    }
    
}

function getUserNumber () {
        while (attempsLeft > 0) {
        let userNumber = prompt ("Enter the number between 0 and 10");

        if (userNumber === "") {
            attempsLeft --;
            alert(`Sorry Not a number, minus 1 attempt! Attemps left ${attempsLeft}`)
        } else {
            userNumber =+ userNumber;
            if (isNaN(userNumber)) {
                attempsLeft --;
                alert(`Sorry Not a number, minus 1 attempt! Attemps left ${attempsLeft}`)
            }
            else if (userNumber < 0 || userNumber > 10) {
                attempsLeft --;
                alert(`Sorry it’s not a good number, minus 1 attempt! Attemps left ${attempsLeft}`)
            } else {
                return userNumber;
            } 
        }
    }
    if (attempsLeft === 0) {
        alert("out of chances");
    }

}

function compareNumbers (userNumber, computerNumber) {
            if (userNumber === computerNumber) {
                alert("WINNER");
                return ("win");
            } else if (userNumber > computerNumber) {
                alert ("Your number is bigger then the computer’s, guess again");
            } else if (userNumber < computerNumber) {
                alert ("Your number is smaller then the computer’s, guess again");
            }
}


//  Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.