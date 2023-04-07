import { DisplayLevel } from "./DisplayLevel"
import { AnswerCheck } from "./AnswerCheck";
import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppContext } from "../App";

export const Player = (props) => {
    const {levelIndex, setLevelIndex, getLevel} = useContext(AppContext);
    const playerLevel = useSelector(state => state.level);
       
    useEffect(()=>{
        console.log(playerLevel);
        setLevelIndex(playerLevel)}, [playerLevel]);
    useEffect(()=>{
        console.log(levelIndex);
        getLevel()},[levelIndex]);
    return <>
         <p>Player page</p>
        <DisplayLevel/>
        <AnswerCheck/>
    </>
   
} 