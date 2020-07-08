import { v4 as uuidv4 } from 'uuid'; // to generate some random ID
import db from '../firebase/firebase';


// action generator
// ADD_EXPENSE
const addExpense = (expense) => {
    return{
        type: 'ADD_EXPENSE',
        expense
    }
}
  
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {description='', note='', amount=0, createdAt=0} = expenseData
        const expense = {description, note, amount, createdAt}
        db.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

//REMOVE_EXPENSE
const removeExpense = ({id}) => {
    return{
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const startRemoveExpense = ({id} ={}) => {
    return (dispatch) => {
        return db.ref(`expenses/${id}`).remove().then(() =>{
            dispatch(removeExpense({id}))
        })
    }
}


//EDIT_EXPENSE
const editExpense = (id, updates) => {
    return{
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

export {addExpense, removeExpense, editExpense}

//SET_EXPENSES
export const setExpenses = (expenses) => {
    return{
    type: 'SET_EXPENSES',
    expenses}
};

export const startSetExpenses = () => {
    return (dispatch) => {
        return db.ref('expenses').once('value').then((snapshot) => {
            const expenses =[];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}










