function getTheWord (){
    const pattern = /\d|W|\s|_/
    let w = "";
    while (pattern.test(w) || w == null || w.length < 8) {
        w = prompt("Player 1, enter the word thet is not less then 8 digits");
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
//console.log(getTheWord ());

