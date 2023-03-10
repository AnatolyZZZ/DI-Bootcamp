import './App.css';
import {useState, useEffect} from 'react';
import quotes from './QuotesDatabase';
import Card from "./components/Card"

// color of the background, the color of the header quote and the color of the button.




const randomColor = () => {
  let color = `#${((Math.random() * 0xfffff * 100000).toString(16)).slice(0, 6)}`
  return color
}

function App() {
  const [_quoteNumber, changeNumber] = useState(0);
  const [_quote, setQuote] = useState('');
  const [_author, setAuthor] = useState('');
  const [_backgroundColor, setBackgroundColor] = useState('');
  const [_buttonColor, setButtonColor] = useState('');
  const [_headerColor, setHeaderColor] = useState('');

  function generateRandom () {
    let r = Math.floor(Math.random() * quotes.length);
    if (r === _quoteNumber) {
      return generateRandom ()
    } else {
      return r
    }
}

  const randomQuote = () => {
    changeNumber(generateRandom());
    setQuote(quotes[_quoteNumber].quote);
    setAuthor(quotes[_quoteNumber].author)
  }

  const randomBackground = () => {
    setBackgroundColor(randomColor());
  }

  const randomButton = () => {
    setButtonColor(randomColor());
  }
  const randomHeader = () => {
    setHeaderColor(randomColor());
  }

  const randomAll = () => {
    randomQuote();
    randomBackground();
    randomButton();
    randomHeader();
  }
  useEffect(()=>{randomAll()},[])
  return (
    <div className="App" style={{backgroundColor : _backgroundColor}}>
      <Card quote={_quote} author={_author} func={randomAll} headerColor ={_headerColor} buttonColor={_buttonColor}/>
    </div>
  );
}

export default App;
