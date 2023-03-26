import { useContext, useEffect } from "react";
import { AppContext, nullLevel } from "../App";
import './LevelEdit.css';

export const Level = (props) => {
    const {levelIndex, editmode, setEdit, level, setLevel, setLevelIndex} = useContext(AppContext);
    const getLevel = async () => {
        if (levelIndex) {
            fetch(`http://localhost:5002/api/levels/${levelIndex}`)
            .then(res => res.json())
            .then(data => {
             setLevel(data[0]);})
            .catch((error) => {
                console.error("Error:", error);
              })
        } else {
            setLevel({...nullLevel})
        }
        
    }
    useEffect(() => {getLevel()}, [levelIndex])
    
    const saveHandler = async (e) => {
        console.log(level, levelIndex);
        const para = {
            method : levelIndex ? 'PUT' : 'POST',
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(level)
        }
        
        fetch(`http://localhost:5002/api/levels`, para)
        .then(res => res.json())
        .then(data => {
            if (!levelIndex) {
                console.log(data)
                setLevelIndex(data[0].id);
                setLevel({...level, id:data[0].id})
                // add dispatch getgame?
            }
            console.log(data)})
        .catch((error) => {
            console.error("Error:", error);
          })
    }
    const cancelBtn = editmode ? <button onClick={(e) => {
        getLevel();
        setEdit(false);
    }}>Discard</button> : <></>

    return <>
    <textarea 
    onChange={(e) => setLevel({...level, description : e.target.value})} value={level.description}
    disabled={!editmode}
    autoComplete='off'>
        {level.description}
    </textarea>
    <button onClick={editmode ? 
            async (e) => {
            await saveHandler(e);
            setEdit(false);
            } 
            : 
            (e) => setEdit(true)}>
        {editmode ? 'Save' : 'Edit'}
    </button>
    {cancelBtn}
    </>
}