import {connect} from 'react-redux'
import { serchField } from '../actions'

const SearchBox = (props) => {
    return (
        <div className="pa2">
            <input type="search"
             placeholder="search for robots"
             className="pa3 ba b--green bg-lighttest-blue"
             onChange={(e) => {props.changeSearch(e.target.value)}}
            />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSearch : (str) => dispatch(serchField(str))
    }
}

export default connect(null, mapDispatchToProps)(SearchBox) 