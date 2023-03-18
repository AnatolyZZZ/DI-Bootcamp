import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import { Contact } from './components/Contact';
import {About} from './components/About'
import { Navbar } from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
      </div>
    </BrowserRouter>
  
  );
}

export default App;
