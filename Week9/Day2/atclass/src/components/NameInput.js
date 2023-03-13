import {connect} from 'react-redux'
import { changeName } from '../actions'
const NameInput = (props) => {
    // console.log(props)
    return (<input type='text' onChange={(e) => props.changeInput(e.target.value, props.type)}/>)
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        firstN : state.firstName,
        secondN : state.secondName
    }
}


const mapDispatchToProps = (dispatch) => {
    return  {
        changeInput : (val, type) => dispatch(changeName(val, type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameInput)
