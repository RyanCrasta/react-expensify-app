import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import {startEditExpense} from '../actions/expenses.js';
import {startRemoveExpense} from '../actions/expenses';

 
function EditExpensePage(props){
     
    console.log(props.expense.id);
    //console.log('updates', expense);
    return(
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
            <ExpenseForm 
            expense = {props.expense}
            onSubmit = {(expense) => {
                    
                // dispatch the action to edit the expense
                props.dispatch(startEditExpense(props.expense.id, expense))
                // redirect to the dashboard
                props.history.push('/')

            }}

            />
            <button className="button button--secondary" onClick={() => {
                props.dispatch(startRemoveExpense({id:props.expense.id}))
                props.history.push('/')
            }}>Remove Expense</button>
            </div>
        </div>
    )
}

const connectedEditExpensePage = connect((state, props) => {
    return{
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
})(EditExpensePage)

export {connectedEditExpensePage as default};
