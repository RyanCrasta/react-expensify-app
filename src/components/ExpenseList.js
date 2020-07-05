import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem  from './ExpenseListItem.js'
import getVisibleExpenses from '../selectors/expenses.js'

export const ExpenseList = (props) => {
    return(
        <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ): (
                <ExpenseListItem  expenses = {props.expenses} />
             )
        }
        </div>
    )

}
  
const ConnectedExpenseList = connect((state) => {
    return{
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
})(ExpenseList);

 
export {ConnectedExpenseList as default}


