import {AppContext} from '../App'
import {useContext} from 'react'


export const ChangeName = (props) => {
    const {setName} = useContext(AppContext)
    return (
        <input onChange={(e) => setName(e.target.value)}/>
    )
}