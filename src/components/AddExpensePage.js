import React from 'react';
import ExpenseForm from './ExpenseForm.js'
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses.js';

 
const AddExpensePage = (props) => {
    
    return(
        <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
            <div className="content-container">
            <ExpenseForm 
                onSubmit = {(expense) => {
                    props.dispatch(startAddExpense(expense))
                    props.history.push('/')
                
                }}

            />
            </div>
        </div>
    )
}

const connectedAddExpensePage = connect()(AddExpensePage)



export {connectedAddExpensePage as default};
