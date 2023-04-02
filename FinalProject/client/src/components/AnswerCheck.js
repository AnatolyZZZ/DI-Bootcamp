import { AppContext } from "../App";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";

export const AnswerCheck = (props) => {
    const {level} = useContext(AppContext);
    const [msg, setMsg] = useState('');
    const [answer, setAnswer] = useState('');
    const levels = useSelector(state => state.levels);
    const cur_level = useSelector(state => state.level)
    console.log('ansers=>',level.answers);

    const levelUp = () => {
        const ind = levels.findIndex(elt => elt.id===
            cur_level);
        console.log('levels =>', levels)
        console.log('cur_level =>',cur_level);
        console.log('ind=>', ind);
       
    }

    const check = (e) => {
        const arr = level.answers.split(',').map(elt => elt.trim());
        const right = arr.filter(elt => elt===answer);
        console.log('arr =>',arr);
        console.log('answer =>', answer )
        console.log('right =>',right);
        right.length === 0 ? setMsg('Wrong. Try again') : levelUp()
    }

    return <div>
        <input type='text' onChange={(e) => setAnswer(e.target.value)}/>
        <button onClick={(e) => check()}>Check answer</button>
    </div>

}