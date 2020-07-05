import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm.js';
import {editExpense} from '../actions/expenses.js';
import {removeExpense} from '../actions/expenses';


function EditExpensePage(props){
     
    console.log(props.expense.id);
    //console.log('updates', expense);
    return(
        <div>
            <ExpenseForm 
            expense = {props.expense}
            onSubmit = {(expense) => {
                    
                // dispatch the action to edit the expense
                props.dispatch(editExpense(props.expense.id, expense))
                // redirect to the dashboard
                props.history.push('/')

            }}

            />
            <button onClick={() => {
                props.dispatch(removeExpense({id:props.expense.id}))
                props.history.push('/')
            }}>Remove</button>
            
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
