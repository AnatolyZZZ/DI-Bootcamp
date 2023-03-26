// import {dotenv} from 'dotenv'
export const GET_PLAYER = 'GET_PLAYER', GET_ADMIN = 'GET_ADMIN', GET_GAME = 'GET_GAME', GET_LEVEL = 'GET_LEVEL', LEVEL_UP = 'LEVEL_UP'
// dotenv.config({path : '../../.env'})

export const getGame = () => (dispatch) => {
    // fetch(`${process.SERVER}:${process.SERVER_PORT}/api/levels`)
    fetch('http://localhost:5002/api/levels')
    .then(res => res.json())
    .then(data => {
        dispatch({
            type: GET_GAME,
            payload : data
        })
    })
    .catch (error => console.log(error))
}