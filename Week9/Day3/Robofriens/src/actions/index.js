export const getRobots = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        dispatch({
            type : 'GET',
            payload : data
        })
    })
    .catch((err) => console.log(err))
}

export const serchField = (str) => {
    return {
        type : 'SEARCH',
        payload : str
    }
}