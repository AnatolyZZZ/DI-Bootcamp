const initialState = {
    age : 20
} 

export const reducer = (state=initialState, action={}) => {
    switch (action.type) {
        case "AGE_UP" :
            return {age : state.age + 1}
        case "AGE_DOWN" :
            return {age : state.age - 1}
        default :
            return {...state}
    }
}