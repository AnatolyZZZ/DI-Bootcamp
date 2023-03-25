import { SEARCH_FIELD, GET_CITY_KEY, GET_WEATHER, CHANGE_METRIC, GET_FORECAST, ADD_TO_FAV, DELETE_FAV, SELECT, AUTOCOMPLETE } from "../actions"
const initialState = {
    searchfield : "",
    favorite : [],
    citykey : "",
    cityname : "",
    weather : '',
    metric  : true,
    forecast : [],
    current : -1,
    autocomplete : []
}

export const reducer = (state=initialState, action={}) => {
    switch (action.type) {
        case SEARCH_FIELD :
            return {...state, searchfield : action.payload}
        case GET_CITY_KEY :
            return {...state, citykey : action.payload.key, cityname : action.payload.name}
        case GET_WEATHER :
            return {...state, weather : action.payload}
        case CHANGE_METRIC:
            return state.metric ? {...state, metric: false} : {...state, metric : true} 
        case GET_FORECAST: 
            return {...state, forecast : action.payload}
        case ADD_TO_FAV:
            const newFav = [...state.favorite]
            newFav.push([state.citykey, state.cityname])
            return {...state, current : newFav.length - 1, favorite : newFav}
        case DELETE_FAV:
            const spliceFav = [...state.favorite]
            spliceFav.splice(action.payload, 1)
            return {...state, current: -1, favorite : spliceFav}
        case SELECT:
            return {...state, current: action.payload, citykey : state.favorite[action.payload][0], cityname: state.favorite[action.payload][1]}
        case AUTOCOMPLETE:
            return {...state, autocomplete : action.payload}
        default :
            return {...state}
    }
}