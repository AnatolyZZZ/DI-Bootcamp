import React from 'react';
import './App.css';
import Home from "./components/Home"
import Profile from "./components/Profile"
import Shop from "./components/Shop"
import {Routes, Route, Link} from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary';
import PostList  from './components/PostList';
import Examle1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

const obj = {
  key1: 'myusername',
  email: 'mymail@gmail.com',
  name: 'Isaac',
  lastname: 'Doe',
  age: 27
}

async function webHook () {
  const req = {
    method : "POST",
    headers : {"Content-type":"application/json"},
    body : JSON.stringify(obj)
  }
  const resp = await fetch ('https://webhook.site/15cfcfb8-db10-4b9d-8a4b-abcec873ca8d', req);
  const data = await resp.text();
  console.log(resp);
}

const App = () => {
  return (
    <div className="App">
      
      <header className="App-header">
        <Link to='/'  >Home</Link>
        <Link to='/profile' >Profile</Link>
        <Link to='/shop' >Shop</Link>
      </header>
      <Routes>
        
        <Route path="/" element={
         <ErrorBoundary key="1">
           <Home/>
        </ErrorBoundary>}/>

        <Route path='/profile' element={
          <ErrorBoundary key="2">
            <Profile/>
          </ErrorBoundary>
        }/>
      
        <Route path="/shop" element={
            <ErrorBoundary key="3">
              <Shop/>
            </ErrorBoundary>
        }/>
        
      </Routes>

      <PostList/>
      <Examle1/>
      <Example2/>
      <Example3/>

      <button onClick={webHook}>Request site</button>

    </div>
  );
}

export default App;
