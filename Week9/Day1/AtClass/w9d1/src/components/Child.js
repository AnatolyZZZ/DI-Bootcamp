import {connect} from 'react-redux'
import {chagePropOne, changePropTwo} from '../redux/actions'
import ChangeByClick from './ChangeByClick'

const Child = (props) => {
    return (<>
    <h2>Child</h2>
    <div>This is from props : {props.prop_one}</div>
    <div>This is from redux: {props.a}</div>
    <div>This is also from redux: {props.b}</div>
    <input onChange={props.changePropA}/>
    <input onChange={props.changePropB}/>
    <ChangeByClick/>
    </>)
}

const mapStateToProps = (state) => {
    return {
      a : state.property_one,
      b : state.property_two
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      changePropA : (e) => dispatch(chagePropOne(e.target.value)),
      changePropB : (e) => dispatch(changePropTwo(e.target.value))
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Child)