import './App.css';
import superheroes from './components/heroes.json'
import Card from './components/Card';
import {useState, useEffect} from "react"
import Score from './components/Score'

function App() {
  const [heroes, changeHeroes] = useState(superheroes.superheroes);
  const [_score, _setScore] = useState(0);
  const [_topscore, _setTopScore] = useState(0);
  const [_status, setStatus] = useState('');

  const shuffle = () => {
    // const newArr = JSON.parse(JSON.stringify(heroes)).sort((a, b) => {return Math.random() - 0.5});
    const newArr = [...heroes].sort((a, b) => {return Math.random() - 0.5})
    changeHeroes(newArr);
  }
  const newGame = () => {
    for (let hero of heroes) {
      hero.clicked = false;
    }
    _setScore(0);
    shuffle();
  }

  const riseScore = () => {
    _setScore(_score + 1);
    shuffle()
    if(_score === heroes.length) {
      finishGame()
    }
  }

  const finishGame = () => {
    if (_score > _topscore) {
      setStatus("Top score beated!")
      _setTopScore(_score);
    }
    if (_score === heroes.length) {
      setStatus("WIN, TOP SCORES ACHIVED!!!")
    }
    newGame();
  }

  const eraseStatus = () => {
    setStatus("");
  }

  useEffect(() => {newGame()}, []);
  return (<>
    <Score score={_score} topscore={_topscore} status={_status}/>
    <div className="App">
      {heroes.map(elt => {return <Card hero={elt} rise={riseScore} key={elt.id} finish={finishGame} nostat={eraseStatus}/>})}
    </div>
    </>);
}

export default App;
