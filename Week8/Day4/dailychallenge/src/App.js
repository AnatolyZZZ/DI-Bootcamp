import './App.css';
import {useState, useEffect} from 'react'


function App() {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [serverResponse, setResp] = useState('');

  const getMessage = async () => {
    const resp = await fetch('http://localhost:3001/api/hello');
    // console.log(resp);
    const data = await resp.json();
    // console.log(data.message);
    setMessage(data.message);
  }
// console.log("error");
  useEffect(() => {getMessage()},[])

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const postToSever = async (e) => {
    e.preventDefault();
      const req = {
        method : "POST",
        headers : {'Content-type' : "application/json"},
        body : JSON.stringify({msg :inputValue}) 
      }
      const resp = await fetch('http://localhost:3001/api/world', req);
      const data = await resp.json();
      setResp(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <header>{message}</header>
        <form onSubmit={postToSever}>
          <input type="text" onChange={changeHandler}/>
          <button type="submit">Submit form</button>
        </form>
        <p>{serverResponse}</p>
      </header>
    </div>
  );
}

export default App;
