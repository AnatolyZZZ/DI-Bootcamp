import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Nav from './components/Nav';
import {Routes, Route} from "react-router-dom"
import { useState, createContext } from 'react';

export const AppContext = createContext(null)

function App() {
  const [accessToken, setAccessToken] = useState();
  return (
    <AppContext.Provider value={{accessToken, setAccessToken}}>
    <div className="App">
     <Nav/>
    <Routes>
    <Route path='/login' element={<Login title="Login"/>}/>
    <Route path='/register' element={<Login title="Register"/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </div> 
    </AppContext.Provider>

  );
}

export default App;
