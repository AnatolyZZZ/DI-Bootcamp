import { AppContext } from "../App";
import { useContext } from "react";

export const DisplayLevel = (props) => {
    const {level} = useContext(AppContext);
    return <div className="levelDisplay">
            <img 
                src={'/uploads/' + level.photo}
                className="levelpicture"
                alt='quest riddle'/>
            <p className="level-text">{level.description}</p>
         </div>

}