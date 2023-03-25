import data from "../tel.json"
import weather from '../taweather-full.json'
import forecast from '../forecast.json'
import { useSelector } from "react-redux"
export const SEARCH_FIELD='SEARCH_FIELD', GET_CITY_KEY="GET_KEY", GET_WEATHER="GET_WEATHER", CHANGE_METRIC="CHANGE_METRIC", GET_FORECAST="GET_FORECAST", ADD_TO_FAV="ADD_TO_FAV", DELETE_FAV="DELETE", SELECT='SELECT', AUTOCOMPLETE="AUTOCOMPLETE"


export const search = (str) => {
    return {
        type : SEARCH_FIELD,
        payload : str
    }
}

// export const autocomplete = (str) => {
//     fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=qsoZwBJR8cZjDPFNtctMPFJa5wr21UT5&q=${str}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         dispatch({
//             type : AUTOCOMPLETE,
//             payload : data
//         })
//     })
// .catch(error => console.log(error))
// }

export const autocomplete = (str) => {
    return {
        type : AUTOCOMPLETE,
        payload : data
    }
}


export const select = (indx) => {
    return {
        type : SELECT,
        payload : indx
    }
}

export const remove = (indx) => {
    return {
        type : DELETE_FAV,
        payload : indx
    }
}

// export const getCityKey = (city) => (dispatch) => {
//     fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=qsoZwBJR8cZjDPFNtctMPFJa5wr21UT5&q=${city}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         dispatch({
//             type : GET_CITY_KEY,
//             payload : {key: data[0].Key, name: data[0].LocalizedName}
//         })
//     })
// .catch(error => console.log(error))
// }

export const getCityKey = (key) => {
    // console.log(data[0]);
    return {
        type : GET_CITY_KEY,
        payload : key
    }
}

export const getWeather = (citykey) => {
    // console.log(weather[0]);
    return {
        type : GET_WEATHER,
        payload : weather[0]
    }
}

export const getForecast = (citykey) => {
    console.log(forecast.DailyForecasts);
    return {
        type : GET_FORECAST,
        payload : forecast.DailyForecasts
    }
}


// export const getWeather = (citykey) => (dispatch) => {
//     fetch(`http://dataservice.accuweather.com/currentconditions/v1/${citykey}?apikey=qsoZwBJR8cZjDPFNtctMPFJa5wr21UT5&details=true"`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         dispatch({
//             type : GET_WEATHER,
//             payload : data[0]
//         })
//     })
//     .catch(error => console.log(error))
// }


// export const getForecast = (citykey) => (dispatch) => {
//     const metric = useSelector(state => state.metric)
//     fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${citykey}?apikey=qsoZwBJR8cZjDPFNtctMPFJa5wr21UT5&details=true&metric=${metric}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         dispatch({
//             type : GET_FORECAST,
//             payload : data.DailyForecasts
//         })
//     })
//     .catch(error => console.log(error))
// }