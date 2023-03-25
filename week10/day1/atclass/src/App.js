import {useState, createContext} from "react"
import './App.css';
import { ChangeName } from "./components/Changename";

export const AppContext = createContext( null)

function App()
{
  const [name, setName] = useState("Film1")
  return (
    <AppContext.Provider value={{setName, name}}>
       <div className="App">
      <header className="App-header">
      <ChangeName/>
      {name}
      </header>
    </div>
    </AppContext.Provider>
   
  );
}

export default App;
