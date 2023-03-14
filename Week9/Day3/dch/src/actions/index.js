const INCREASE = "INCREASE",  DECREASE = "DECREASE", INCREASE_ODD ="INCREASE_ODD", ASYNC_INCR='ASYNC'
export {INCREASE, DECREASE, INCREASE_ODD, ASYNC_INCR} 

export const increase = () => {
    return {
        type : INCREASE
    }
}

export const decrease = () => {
    return {
        type : DECREASE
    }
}

export const increseOdd = () => {
    return {
        type : INCREASE_ODD
    }
}

export const asIncrease = () => (dispatch) => {
    // const doThe = () => {
    //     console.log("timer");
    //     dispatch({type : ASYNC_INCR})
    // }
    setTimeout(() => dispatch({type : ASYNC_INCR}), 1000)
}