import { CityWeather } from './components/CityWeather';
import { SearchField } from './components/SearchField';
import { Favorites } from './components/Favorites';
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to='/'>Search</Link>
        <Link to='/fav'>Favortes</Link>
        <Routes>
          <Route path='/' element={<SearchField/>}/>
          <Route path='/fav' element={<Favorites/>}/>
        </Routes>
       <CityWeather/>
      </header>
    </div>
  );
}

export default App;
