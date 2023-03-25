import {useSelector} from 'react-redux'
import { OneDay } from './OneDay'

export const Forecast = (props) => {
    const forecast = useSelector (state => state.forecast);
    return (<div className='forecast'>
        {forecast.map((elt, index) => {
            return <OneDay day={elt} key={index}/>
        })}
    </div>
        
    )
}