const initialState = {
    currentForm : {
        accountN : "",
        fsc : "",
        holderName : "",
        amount : ""
    },
    // transactions : []
    transactions : localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [],
    current : null

}

export const reducer = (state=initialState, action ={}) => {
    // console.log(state);
    switch (action.type) {
        case 'CHANGE_FIELD' :
            const newForm = {...state.currentForm};
            newForm[action.field] = action.payload;
            return {...state, currentForm:newForm}
        case 'INSERT' :
            const newTransactions = [...state.transactions]
            if (state.current === null) {
                newTransactions.push(action.payload)
            } else {
                newTransactions[state.current] = action.payload;
            }
            
            localStorage.setItem('list', JSON.stringify(newTransactions))
            // console.log(newTransactions);
            return {...state, transactions:newTransactions, current:null}
        case 'DELETE' :
            const Transactions = [...state.transactions]
            // console.log(action.payload)
            // console.log(Transactions)
            Transactions.splice(action.payload, 1)
            // console.log(Transactions)
            localStorage.setItem('list', JSON.stringify(Transactions))
            return {...state, transactions:Transactions, current:null}
        case 'UPDATE' :
            const newCurrent =  {...state.transactions[action.payload]}
            return {...state, currentForm:newCurrent, current:action.payload}
        default :
            return {...state}
    }
}