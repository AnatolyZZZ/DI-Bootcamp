import logo from './logo.svg';
import './App.css';
import React from 'react';
import Aninals from './UserFavoriteColors';
import Ex4 from './Exercise4';

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const myelement2 = React.createElement('h1', {}, 'I do not use JSX!');
  return (
    <>
      <p>Hello world</p>
      {myelement2}
      {myelement}
      <p>{`React is ${sum} times better with JSX`}</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <Aninals animals={user.favAnimals}/>
      <Ex4/>
    </>
  );
}

export default App;
