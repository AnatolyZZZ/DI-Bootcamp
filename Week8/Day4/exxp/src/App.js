import React from 'react';
import './App.css';
import Home from "./components/Home"
import Profile from "./components/Profile"
import Shop from "./components/Shop"
import {Routes, Route, Link} from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary';
import PostList  from './components/PostList';

const App = () => {
  return (
    <div className="App">
      
      <header className="App-header">
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/shop'>Shop</Link>
      </header>
      <Routes>
        
        <Route path="/" element={
         <ErrorBoundary>
           <Home/>
        </ErrorBoundary>}/>

        <Route path='/profile' element={
          <ErrorBoundary>
            <Profile/>
          </ErrorBoundary>
        }/>
      
        <Route path="/shop" element={
            <ErrorBoundary>
              <Shop/>
            </ErrorBoundary>
        }/>
        
      </Routes>

      <PostList/>

    </div>
  );
}

export default App;
