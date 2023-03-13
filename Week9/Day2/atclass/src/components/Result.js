import {connect} from 'react-redux'

const Result = (props) => {
    console.log(props.resp)
    if (props.resp.fname != '') {
        return (<div>
            <p>First name: {props.resp.fname}</p>
            <p>Second name: {props.resp.sname}</p>
            <p>Your names fit {props.resp.percentage}%</p>
            <p>{props.resp.result}</p>
        </div>)
    } else {
        return ''
    }
   
}

const mapStateToProps = (state) => {
    return {
        resp : state.response
    }
}

export default connect(mapStateToProps)(Result)