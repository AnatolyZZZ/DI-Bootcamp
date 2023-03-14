export const getRobots = (arr) => {
    return  {
        type : 'GET',
        payload : arr
    }
}

export const serchField = (str) => {
    return {
        type : 'SEARCH',
        payload : str
    }
}