// import { useSelector, useDispatch } from "react-redux"
// import {INCREASE, DECREASE, INCREASE_ODD} from "../actions"

// const Counter = (props) => {
//     const counter = useSelector((state) =>  {
//         console.log(state)
//         return state.counter});
//     const dispatch = useDispatch();
//     return (
//         <div>
//             <button onClick={() => dispatch({type : DECREASE})}>-</button>
//             <span>{counter}</span>
//             <button onClick={() => dispatch({type : INCREASE})}>+</button>
//             <button onClick={() => dispatch({type : INCREASE_ODD})}>Increase if odd</button>
//         </div>
//     )
// }

// export default Counter

import { connect } from "react-redux";
import {increase, decrease, increseOdd, asIncrease} from "../actions"

const Counter = (props) => {
    return (
                <div>
                    <button onClick={props.decreaseC}>-</button>
                    <span>{props.counter}</span>
                    <button onClick={props.increaseC}>+</button>
                    <button onClick={props.increseIfOdd}>Increase if odd</button>
                    <button onClick={props.waitAndIncrease}>Increase in 1sec</button>
                </div>
            )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        counter : state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseC : () => dispatch(increase()),
        decreaseC : () => dispatch(decrease()),
        increseIfOdd : () => dispatch(increseOdd()),
        waitAndIncrease : () => dispatch(asIncrease())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
