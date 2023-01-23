let age = prompt ("What is your age?");
age = +age;

if (age < 18) {
    alert('You are too yong!');
} else if (age === 18) {
    alert('Congrats!');
} else {
    alert("Welcome")
}

let a = 2 + 2;

switch (a) {
  case 3: // no a is 4
    alert( 'Too small' );
    break;
  case 4: // yes go inside
    alert( 'Exactly!' ); /*execute*/
    break; //exit here
  case 5: //exited before
    alert( 'Too large' ); 
    break;
  default: //exited before
    alert( "I don't know such values" );
}


switch (a) {
  case 4: 
    alert('Right!'); //executed and exit after
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}