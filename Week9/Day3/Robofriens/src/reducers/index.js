const initialState = {
    searchfield : '',
    robots : []
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SEARCH' :
            return {...state, searchfield : action.payload}
        case "GET" :
            return {...state, robots : action.payload}
        default : 
            return {...state}
    }
}