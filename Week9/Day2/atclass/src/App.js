import NameInput from './components/NameInput'; 
import Button from './components/Button'
import Result from './components/Result';
import './App.css';
import {useSelector} from "react-redux"

function App(props) {
  const firstName = useSelector(state =>  state.firstName);
  const secondName = useSelector(state => state.secondName);
  const resp = useSelector(state => state.responce)
  return (
    <div className="App">
      <header className="App-header">
        <NameInput type="FIRSTNAME"/>
        <NameInput type="SECONDNAME"/>
        <Button/>
        <Result/>
      </header>
    </div>
  );
}

export default App;
