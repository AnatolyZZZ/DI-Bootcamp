const numbers = [5,0,9,1,7,4,2,6,3,8];

let myString = numbers.join(' ');
console.log(myString);

let num = numbers;

for (let i = num.length; i > 0 ; i--) {
    for (let j = 0; j < i; j++) {
        if ( num[j] < num[j+1]) {
            let tmp = num[j];
            num[j] = num[j+1];
            num[j+1] = tmp;
        }
    }
}

let myString2 = num.join(' ');
console.log(myString2);
