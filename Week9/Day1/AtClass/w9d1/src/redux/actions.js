export const chagePropOne = (value) => {
    return {
        type : 'PROP_ONE',
        payload: value
    }
}

export const changePropTwo = (value) => {
    return {
        type : 'PROP_TWO',
        payload: value
    }
}

export const changeOneToTow = () => {
    return {
        type : 'ONE_TO_TWO'
    }
}