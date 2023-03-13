import {connect} from 'react-redux'
import {apiResponse} from '../actions'

const Button = (props) => {
    async function checkNames () {
        const options ={
            method : 'GET',
            headers: {
                'X-RapidAPI-Key': '1817c93041mshfe207fc621a8329p18f903jsn0331dc9a5dcf',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        }
        const resp = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${props.secondN}&fname=${props.firstN}`, options);
        const data = await resp.json();
        console.log(props)
        props.setResp(data)
        // console.log(data);
    }
    return (<button onClick={checkNames}>Check the names</button>)
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        firstN : state.firstName,
        secondN : state.secondName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setResp : (data) => dispatch(apiResponse(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button)