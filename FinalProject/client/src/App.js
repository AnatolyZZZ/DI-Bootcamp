import './App.css';
import {useSelector} from "react-redux";
import { useState, createContext, useEffect } from 'react';
import {Admin} from "./components/Admin";
import {Player} from "./components/Player";
import { useDispatch } from 'react-redux';
import { getGame } from './actions';

export const AppContext = createContext(null);
export const nullLevel = {
    photos : [],
    answers : [],
    description : "",
    id : -1
}
nullLevel.photos.push('../images/Asya.jpeg')
nullLevel.photos.push('../images/Tolya.jpeg')

function App() {
  const isAdmin = useSelector(state => state.isAdmin);
  const [levelIndex, setLevelIndex] = useState(-1);
  const [editmode, setEdit] = useState(false);
  const [level, setLevel] = useState(nullLevel);
  const dispatch = useDispatch();

  useEffect (() => {dispatch(getGame())}, [])

  return (
    <AppContext.Provider value={{levelIndex, setLevelIndex, editmode, setEdit, level, setLevel}}>
      {isAdmin ?  <Admin/> : <Player/>}
    </AppContext.Provider>
      
  );
}

export default App;
