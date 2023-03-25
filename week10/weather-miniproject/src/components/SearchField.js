import {useSelector, useDispatch} from 'react-redux'
import { search, getCityKey, autocomplete } from '../actions'
export const SearchField = (props) => {
    const cityName = useSelector((state) => state.searchfield);
    const autocomplete_ = useSelector((state) => state.autocomplete)
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.auto.options[e.target.auto.selectedIndex].text)
        const selected = e.target.auto.options[e.target.auto.selectedIndex]
        dispatch(getCityKey({key :selected.value, name: selected.text}))

    }
    return (<div>
        <form onSubmit={submitHandler}>
            <input type='text' onChange={(e) => dispatch(autocomplete(e.target.value))} placeholder="Enter city"/>
            <select name='auto'>
            {autocomplete_.map((elt, index) => {
                // console.log(elt);
                return <option value={elt.Key}>{elt.LocalizedName}</option>
            })}
            </select>
            
            <button type='submit'>Get weather</button>
        </form>
        
    </div>)
}