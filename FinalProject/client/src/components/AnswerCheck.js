import { AppContext } from "../App";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPlayerLevel } from "../actions";

export const AnswerCheck = (props) => {
    const {level, setLevelIndex} = useContext(AppContext);
    const [msg, setMsg] = useState('');
    const [answer, setAnswer] = useState('');
    const levels = useSelector(state => state.levels);
    const cur_level = useSelector(state => state.level);
    const userid = useSelector(state => state.id);
    console.log('ansers=>',level.answers);
    const ind = levels.findIndex(elt => elt.id ==
        cur_level);
    const dispatch = useDispatch();
    const levelUp = async () => {
        console.log('levels =>', levels)
        console.log('cur_level =>',cur_level);
        console.log('ind=>', ind);
        const next_level = levels[ind + 1].id;
        const para = {
            method : 'PUT',
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify({
                id : userid,
                new_level : next_level
            })
        }
       const res = await fetch('/api/users/lvl', para);
       if (res.ok === true) {
        dispatch(setPlayerLevel(next_level));
        setLevelIndex(next_level);
       }
    }

    const check = (e) => {
        const arr = level.answers.split(',').map(elt => elt.trim());
        const right = arr.filter(elt => elt===answer);
        console.log('arr =>',arr);
        console.log('answer =>', answer )
        console.log('right =>',right);
        right.length === 0 ? setMsg('Wrong. Try again') : levelUp()
    }

    return ind !== levels.length - 1 &&
     <div>
        <input type='text' onChange={(e) => setAnswer(e.target.value)}/>
        <button onClick={(e) => check()}>Check answer</button>
    </div>
    

}