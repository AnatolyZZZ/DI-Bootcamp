import {INCREASE, DECREASE, INCREASE_ODD, ASYNC_INCR} from '../actions'
const initialState = {
    counter : 0
}

export const reducer = (state=initialState, action={}) => {
    console.log(state.counter)
    switch (action.type) {
        case INCREASE :
            return {counter : state.counter + 1}
        case ASYNC_INCR :
            return {counter : state.counter + 1}
        case DECREASE : 
            return {counter : state.counter - 1}
        case INCREASE_ODD : 
            if(state.counter % 2 === 1) {
                return {counter : state.counter + 1}
            } else {
                return {...state}
            }
        default : 
            return {...state}
    }
}