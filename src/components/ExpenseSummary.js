import summary from '../selectors/expenses-total'
import React from 'react';
import {connect} from 'react-redux';
import getVisibleExpenses from '../selectors/expenses.js'
import numeral from 'numeral';
import {Link} from 'react-router-dom';
  
const ExpenseSummary = (props) => {
    const res = summary(props.expenses);
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return(
        <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
           
            Viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>{numeral(res).format('$0,0.00')}</span>
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
            </h1> 
        </div>

        </div>
    )
}

const ConnectedExpenseList = connect((state) => {
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
})(ExpenseSummary);


export {ConnectedExpenseList as default}