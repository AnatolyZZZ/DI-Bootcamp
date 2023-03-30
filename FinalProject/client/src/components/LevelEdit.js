import { useContext, useEffect } from "react";
import { AppContext, nullLevel } from "../App";
import './LevelEdit.css';
import { useDispatch } from 'react-redux';
import { getGame} from "../actions";
import { Galery } from "./Galery";
import axios from 'axios'

export const LevelEdit = (props) => {
    const {levelIndex, editmode, setEdit, level, setLevel, setLevelIndex} = useContext(AppContext);
    const dispatch = useDispatch();
    // const photos = JSON.parse(level.photos);
    // console.log(level, photos);
    // const a = [];
    // a.push('www.1.ru')
    // console.log(JSON.stringify(a))

    const getLevel = async () => {
        if (levelIndex != -1) {
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
        // console.log(level.photo)  
    }

    useEffect(() => {getLevel()}, [levelIndex])
    
    const saveHandler = async (e) => {
        console.log(level, levelIndex, e.target);
        e.preventDefault()
        // same handler for new level and edditing, if levelIndex -1 - POST, else PUT, and if 
        // not in edit mode this button switche to editmode
        if (!editmode) {
            setEdit(true)
        } else {
            const formD = new FormData(e.target);
            // otherwise id attepts to create new level wit id -1
            if (levelIndex === -1) {
                formD.delete("id");
            }
            const para = {
                method : levelIndex === -1 ? 'POST' : 'PUT',
                // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body : formD
            }
        
            fetch(`http://localhost:5002/api/levels`, para)
            .then(res => res.json())
            .then(data => {
                // levelIndex === -1 means we are creating new, and now we get it's new index
                if (levelIndex === -1) {
                    setLevelIndex(data[0].id);
                    setLevel({...level, id:data[0].id})
                    // We just modyed number of levels -> have to update game menu and state.levels
                    dispatch(getGame())
                }
                })
            .catch((error) => {
                console.error("Error:", error);
            })
            // const para2 =  { headers: {'Content-Type': 'application/x-www-form-urlencoded'} };
            // const resp = await axios.put('http://localhost:5002/api/levels', formD, para2)
            // console.log(resp.data);
        }  
    }
    const delHandler = async (e) => {
        const para = {
            method : 'DELETE',
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(level)
        }
        if(prompt('Deleting level can crash unfinished games!!! Are you shure?! Type: Yes') === "Yes") {
            fetch(`http://localhost:5002/api/levels`, para)
            .then(res => res.json())
            .then(data => {
            // We just modyed number of levels -> have to update state.levels and GameMenu component
            // and set levelIndex to -1
                dispatch(getGame())
                setLevelIndex(-1)
                })
            .catch((error) => {
                console.error("Error:", error);
          })
        }
        
    }

    // if we discard changes have to get level from server
    const cancelBtn = editmode ? <button onClick={(e) => {
        getLevel();
        setEdit(false);
    }}>Discard</button> : <></>

    // show button only in edit mode and not for new level
    const delBtn = editmode&&(levelIndex !== -1)? <button onClick={(e) => {
        delHandler();
        setEdit(false);
    }}>Delete</button> : <></>

    const editBtn = 
    <button type="submit">
        {levelIndex === -1 ? 'Create new level' : editmode ? 'Save' : 'Edit'}
    </button> 
    
    const imagesource = `http://localhost:5002/uploads/${level.photo}`

    return <>
    {level.photo ? <img src={imagesource} className="mainpic"/> : <></>}
    <form  method="POST" 
    encType="multipart/form-data"
     onSubmit={saveHandler}>
        <input type='hidden' value={level.id} name='id'/>
        <input type="file" name="photo" />
        <textarea name="description"
            onChange={(e) => setLevel({...level, description : e.target.value})} value={level.description}
            disabled={!editmode}
            autoComplete='off'>
            {level.description}
        </textarea>
        <input type="text" name="answers" placeholder="enter answers separated with coma" onChange={(e) =>setLevel({...level, answers : e.target.value})} value={level.answers} />
        {editBtn}
    </form>
    
    {/* <textarea
    onChange={(e) => setLevel({...level, description : e.target.value})} value={level.description}
    disabled={!editmode}
    autoComplete='off'>
        {level.description}
    </textarea>
    {editBtn} */}
    {cancelBtn}
    {delBtn}
    </>
}