import {connect} from 'react-redux'
import {chagePropOne, changeOneToTow} from '../redux/actions'

const ChangeByClick = (props) => {
    return (
        <div>
            {/* <button onClick={props.changePropA}>Change prop one to prop two</button> */}
            <button onClick={()=>props.dispatch({type: 'ONE_TO_TWO'})}>Change prop one to prop two</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      a : state.property_one,
      b : state.property_two
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      changePropA : () => dispatch(changeOneToTow())
    }
  }

  // export default connect(mapStateToProps, mapDispatchToProps)(ChangeByClick)
  export default connect()(ChangeByClick)