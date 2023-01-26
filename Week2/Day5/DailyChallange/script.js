let bNum = prompt("How many beers initialy on the wall?");
let currentRound = 1;
let song = "";
let bottels = "bottels"; // then ithe bottle is 1 should change

bNum = +bNum;
do {
    if (bNum === 0) {
        song += "no bottle of beer on the wall";
        break;
    }
    if (bNum == 1) {
        bottels = "bottel" // then ithe bottle is 1 should change
    }
    song+= `${bNum} ${bottels} of beer on the wall\n`;
    currentRound = Math.min(currentRound, bNum); // can't take more then there is
    if (currentRound > 1) {
        song+=`Take ${currentRound} down, pass them around\n`;
    } else {
        song+=`Take 1 down, pass it around\n`; 
    }
    bNum -= currentRound;
    currentRound++;
    if (bNum > 0) {
        if (bNum == 1) {
            bottels = "bottel" // then ithe bottle is 1 should change
        }
        song+= `${bNum} ${bottels} of beer on the wall\n`;
        song+="\n";
    }
} while (bNum >= 0);

console.log(song);