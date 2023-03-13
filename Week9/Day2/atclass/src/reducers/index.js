const initState = {
    firstName : '',
    secondName : '',
    response : {}
}

export const reducer = (state = initState, action = {}) => {
    // console.log(state);
    switch (action.type) {
        case 'FIRSTNAME' : 
            return {...state, firstName:action.payload}
        
        case 'SECONDNAME' : 
            return {...state, secondName:action.payload}
        case 'API' :
            return {...state, response : action.payload} 
        default :
            return {...state}
    }
}