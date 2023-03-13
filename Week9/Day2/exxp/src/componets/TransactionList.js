import {connect} from "react-redux"
import "./Transactions.css"
import { deleteTransaction, modyfy } from "../actions"

const List = (props) => {
    console.log(props.transactions)
    return (
        <div className="list">
            {props.transactions.map((elt, index) => {
                return (<div key={index} className="transaction">
                    <div>{elt.accountN}</div>
                    <div>{elt.fsc}</div>
                    <div>{elt.holderName}</div>
                    <div>{elt.amount}</div>
                    <button onClick={(e) => props.delete(index)}>Del</button>
                    <button onClick={(e) => props.update(index)}>Upd</button>
                </div>)
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        transactions : state.transactions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete : (id) => dispatch(deleteTransaction(id)),
        update : (id) => dispatch(modyfy(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)