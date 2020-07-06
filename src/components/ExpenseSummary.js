import summary from '../selectors/expenses-total'
import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses.js'
import numeral from 'numeral';
 
const ExpenseSummary = (props) => {
    const res = summary(props.expenses);
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return(
        <div>
            <h1>
            {`Viewing ${props.expenses.length} ${expenseWord} totalling ${numeral(res).format('$0,0.00')}`}
            </h1>
        </div>
    )
}

const ConnectedExpenseList = connect((state) => {
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
})(ExpenseSummary);


export {ConnectedExpenseList as default}