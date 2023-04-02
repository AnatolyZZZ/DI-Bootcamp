import { GET_GAME , SET_LEVEL, LEVEL_UP, SET_TOKEN, SET_ADMIN, SET_ID} from '../actions'
const initialState = {
    level : 0,
    levels : [],
    id : 0,
    isAdmin : true,
    accessToken : ""
}

export const reducer = (state=initialState, action={}) => {
    switch (action.type) {
        case GET_GAME : 
            return {...state, levels : action.payload}
        case SET_TOKEN :
            return {...state, accessToken : action.payload}
        case SET_ADMIN :
            return {...state, isAdmin : action.payload}
        case SET_LEVEL :
            return {...state, level : action.payload}
        case SET_ID :
            return {...state, id : action.payload}
        default:
            return {...state}
    }
}