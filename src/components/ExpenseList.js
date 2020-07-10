import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem  from './ExpenseListItem.js'
import getVisibleExpenses from '../selectors/expenses.js'

export const ExpenseList = (props) => {
    return(
        <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
            

        </div>
        <div className="list-body">
        {
            props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expenses</span>
                </div>
                
            ): (
                <ExpenseListItem  expenses = {props.expenses} />
             )
        }
        </div>
        </div>
    )

}
  
const ConnectedExpenseList = connect((state) => {
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
})(ExpenseList);

 
export {ConnectedExpenseList as default}


