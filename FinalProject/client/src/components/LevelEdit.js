import { useContext, useEffect, useState } from "react";
import { AppContext, nullLevel } from "../App";
import './LevelEdit.css';
import { useDispatch } from 'react-redux';
import { getGame} from "../actions";

export const LevelEdit = (props) => {
    const {levelIndex, editmode, setEdit, level, setLevel, setLevelIndex} = useContext(AppContext);
    const dispatch = useDispatch();

    // const photos = JSON.parse(level.photos);
    // console.log(level, photos);
    // const a = [];
    // a.push('www.1.ru')
    // console.log(JSON.stringify(a))

    const getLevel = async () => {
        if (levelIndex !== -1) {
            fetch(`api/levels/${levelIndex}`)
            .then(res => res.json())
            .then(data => {
             setLevel({...data[0], imagedeleted : "false"});
            })
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
        // not in edit mode this button switch to editmode
        if (!editmode) {
            setEdit(true)
        } else {
            const formD = new FormData(e.target);
            // otherwise id attepts to create new level with id -1
            if (levelIndex === -1) {
                formD.delete("id");
            }
            const para = {
                method : levelIndex === -1 ? 'POST' : 'PUT',
                body : formD
            }
        
            fetch(`/api/levels`, para)
            .then(res => res.json())
            .then(data => {
                    setLevel(data[0]);
                })
            .catch((error) => {
                console.error("Error:", error);
            })
          
            setEdit(false);
            // want to clear file input after submiting
            e.target.file.value = '';
        }
    }
    const delHandler = async (e) => {
        const para = {
            method : 'DELETE',
            headers: {"Content-Type" : "application/json"},
            body : JSON.stringify(level)
        }
        if(prompt('Deleting level can crash unfinished games!!! Are you shure?! Type: Yes') === "Yes") {
            fetch(`/api/levels`, para)
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
       setLevelIndex(-1); 
    }
    const deleteImage = async (e) => {
        setLevel({...level, imagedeleted : true})
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


    return <>
    {level.photo && (level.imagedeleted==="false") && <>
    <img 
        src={'/uploads/' + level.photo}
        className="mainpic"
        alt='quest riddle'/>

    {editmode && <button onClick={(e) =>deleteImage()}>delete image</button>}
    </>}
    
    
    <form  method="POST" 
        encType="multipart/form-data"
        onSubmit={saveHandler}>

        <input type='hidden' value={level.id} name='id'/>
        <input type='hidden' value={level.photo} name='photo'/>
        <input type='hidden' value={level.imagedeleted} name='imagedeleted'/>

        <input 
            type="file"
            name="file"
            disabled={!editmode}
            placeholder="Add riddle image"
            accept="image/*"/>
        <br/>
        <textarea name="description"
            onChange={(e) => setLevel({...level, description : e.target.value})} 
            value={level.description}
            disabled={!editmode}
            placeholder="enter riddle text"
            autoComplete='off'>
            {level.description}
        </textarea>
        <br/>
        <input 
            type="text" 
            name="answers" 
            placeholder="enter answers separated with coma" 
            onChange={(e) =>setLevel({...level, answers : e.target.value})} 
            value={level.answers} 
            disabled={!editmode}
            autoComplete='off'
        />
        {editBtn}
    </form>

    {cancelBtn}
    {delBtn}
    </>
}