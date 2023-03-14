import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const age = useSelector((state) => state.age)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=> dispatch({type : "AGE_UP"})}>Age up</button>
        <span>{age}</span>
        <button onClick={()=> dispatch({type: "AGE_DOWN"})}>Age down</button>
      </header>
    </div>
  );
}

export default App;
