import React from 'react';
import ExpenseForm from './ExpenseForm.js'
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses.js';


const AddExpensePage = (props) => {
    
    return(
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
                onSubmit = {(expense) => {
                    props.dispatch(addExpense(expense))
                    props.history.push('/')
                
                }}

            />
        </div>
    )
}

const connectedAddExpensePage = connect()(AddExpensePage)



export {connectedAddExpensePage as default};
