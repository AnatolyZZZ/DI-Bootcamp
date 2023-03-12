import React from 'react'
import {connect} from "react-redux"
import {increase, decrease} from '../actions/index'

class Counter extends React.Component {
    constructor () {
        super ()
    }
    render () {
        return (<>
        <button onClick={this.props.decreaseByOne}>-</button><span>{this.props.count}</span><button onClick={this.props.increaseByOne
        }>+</button>
        </>)
    }
}

const mapStateToProps = (state) => {
    return {
        count : state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseByOne : () => dispatch(increase()),
        decreaseByOne : () => dispatch(decrease())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)