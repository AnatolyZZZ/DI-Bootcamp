import { useSelector, useDispatch } from "react-redux";
import {select} from "../actions"

export const Favorites = () => {
    const fav = useSelector(state => state.favorite);
    const dispatch = useDispatch();
// const onClickHandler = (e) 

return (
    fav.map((elt, index) => { return (
        <div key = {index} onClick={() => dispatch(select(index))}>
            <p>Key : {elt}</p>
        </div>)
    })
)    
}