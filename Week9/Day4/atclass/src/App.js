import './App.css';
import Products from './components/Products'
import {Product} from './components/Product';
import {Add} from './components/Add'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Products />}/>
            <Route path='/:id' element={<Product />}/>
            <Route path='/add' element={<Add />}/>
          </Routes>
        </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
