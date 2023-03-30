import { useContext } from "react"
import { useSelector } from "react-redux";
import { AppContext } from "../App"
import './GameMenu.css'

export const GameMenu = (props) => {
    const levels = useSelector (state => state.levels);
    const {setLevelIndex, setEdit} = useContext(AppContext)
    
    return <div className="menu">
            {levels.map(elt => {return <div onClick={(e) => {setLevelIndex(elt.id); setEdit(false)}} className="levelBtn" key={elt.id}>{elt.id}</div>})}
            
            <div className="levelBtn" onClick={(e) => {setEdit(true); setLevelIndex(-1)}}>New level</div>
         </div>
    
}