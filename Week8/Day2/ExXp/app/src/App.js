import logo from './logo.svg';
import './App.css';
import Car from './Components/Car.js'
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <><Car model="Ford Mustang" color="red" size='small'/>
    <Car model="Tesla" color="blue" size='tiny'/>
    <Events/>
    <br></br>
    <Phone/>
    <br></br>
    <br></br>
    <Color/>
    </>
  );
}

export default App;
