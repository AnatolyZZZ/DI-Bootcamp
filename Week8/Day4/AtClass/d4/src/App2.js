import React from "react";
import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import {Routes, Route, Link} from "react-router-dom"

const App2 = () => {
    return (
        <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='c'>Contact</Link>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='c' element={<><Contact/><About/></>}/>
        </Routes> 
        </>
    )
}

export default App2;