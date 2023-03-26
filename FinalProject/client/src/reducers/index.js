import { GET_PLAYER , GET_ADMIN , GET_GAME , GET_LEVEL , LEVEL_UP } from '../actions'
const initialState = {
    user : {},
    levels : [],
    isAdmin : true
}

export const reducer = (state=initialState, action={}) => {
    switch (action.type) {
        case GET_PLAYER : 
            return {...state, user : action.payload, isAdmin : false}
        case GET_ADMIN : 
            return {...state, user : action.payload, isAdmin : true}
        case GET_GAME : 
            return {...state, levels : action.payload}
        default:
            return {...state}
    }
}