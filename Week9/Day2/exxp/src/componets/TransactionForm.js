import {connect} from 'react-redux'
import {changeField, addTransaction} from '../actions/index'
import './TransactionForm.css'

const TheForm = (props) => {

    const submitHandler = (e) => {
        e.preventDefault();
        props.addTrans(props.currentForm);
        console.log(props)
    }

    let buttonName = (props.isChange === null)? "Submit" : "Change";

    return (<>
    <h1>Financial transactions:</h1>
        <form onSubmit={submitHandler} className="theForm">
            <input type="text" name='accountN' placeholder="Account Number" onChange={(e) => props.changeF(e.target.value, e.target.name)} value={props.currentForm.accountN}/>
            <input type="text" name='fsc' placeholder="FSC" onChange={(e) => props.changeF(e.target.value, e.target.name)} value={props.currentForm.fsc}/>
            <input type="text" name='holderName' placeholder="A/C Holder name" onChange={(e) => props.changeF(e.target.value, e.target.name)} value={props.currentForm.holderName}/>
            <input type="text" name='amount' placeholder="Amount" onChange={(e) => props.changeF(e.target.value, e.target.name)} value={props.currentForm.amount}/>
            <button type='submit'>{buttonName}</button>
        </form>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentForm : state.currentForm,
        isChange : state.current
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeF : (val, field) => dispatch(changeField(val, field)),
        addTrans : (obj) => dispatch(addTransaction(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheForm)