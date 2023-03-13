export const changeField = (data , field) => {
    return {
        type : 'CHANGE_FIELD',
        field : field,
        payload : data
    }
}

export const addTransaction = (obj) => {
    return {
        type : 'INSERT',
        payload : obj
    }
}

export const deleteTransaction = (id) => {
    return {
        type : 'DELETE', 
        payload : id
    }
}

export const modyfy = (id) => {
    return {
        type : "UPDATE",
        payload : id
    }
}
