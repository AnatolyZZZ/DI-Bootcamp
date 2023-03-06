import logo from './logo.svg';
import './App.css';
import Car from "./components/Car.js"
import Actor from "./components/Actors.js"
import Sunrise from "./components/Sunrise.js"

function App() {
  const carColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ]
  return (
    <div className="App">
      <Car colors={carColors}/>
      <Actor/>
      <Sunrise/>
    </div>
  );
}

export default App;
