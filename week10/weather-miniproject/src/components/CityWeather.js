import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getWeather, getForecast, DELETE_FAV, ADD_TO_FAV, remove } from '../actions'
import { OneDay } from './OneDay'

export const CityWeather = (props) => {
    const cityName = useSelector ((state) => state.cityname);
    const citykey = useSelector (state => state.citykey);
    const weather = useSelector (state => state.weather);
    const forecast = useSelector (state => state.forecast);
    const fav = useSelector (state => state.favorite);
    const index = useSelector (state => state.current)
    const dispatch = useDispatch();
    useEffect (()=>{
        if (citykey !== "") {
            dispatch(getWeather(citykey))
            dispatch(getForecast(citykey))
        }
    }, [citykey])
    const toggleFav = (e) => {
        console.log(e.target.checked);
        e.target.checked ? dispatch({type : ADD_TO_FAV}) : dispatch (remove(index))
        console.log(fav)
    } 
    // console.log(cityName)
    const isChechked = (index === -1) ? false : true 
    return (
        (citykey === "") ?  <></> :
    <div>
        <input type="checkbox" onChange={toggleFav} checked={isChechked}/>
        <p>City name: {cityName}</p>
        <p>City key : {citykey}</p>
        <p>Weather text : {weather.WeatherText}</p>
        <div>
             {forecast.map((elt, index) => {
            return <OneDay day={elt} key={index}/>
        })}
        </div>
       
    </div>)
}