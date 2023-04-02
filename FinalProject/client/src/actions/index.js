export const GET_GAME = 'GET_GAME', LEVEL_UP = 'LEVEL_UP', SET_TOKEN='SET_ACCESS_TOKEN', SET_ADMIN = "SET_ADMIN", SET_LEVEL = 'SET_LEVEL', SET_ID = 'SET_ID'


export const getGame = () => (dispatch) => {
    fetch('/api/levels')
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: GET_GAME,
            payload : data
        })
    })
    .catch (error => console.log(error))
}

export const setToken = (token) => {
    return {
        type : SET_TOKEN,
        payload : token
    }
}

export const setAdmin = (admin) => {
    return {
        type : SET_ADMIN,
        payload : admin
    }
}

export const setLevel = (level) => {
    return {
        type : SET_LEVEL,
        payload : level
    }
}

export const setUserId = (id) => {
    return {
        type : SET_ID,
        payload : id
    }
}


