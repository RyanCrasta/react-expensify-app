import { v4 as uuidv4 } from 'uuid'; // to generate some random ID

// action generator
// ADD_EXPENSE
const addExpense = ({description='', note='', amount=0, createdAt=0} = {}) => {
    return{
        type: 'ADD_EXPENSE',
        expense:{
            id: uuidv4(),
            description,
            note,
            amount,
            createdAt
        }
    }
}
  
//REMOVE_EXPENSE
const removeExpense = ({id}) => {
    return{
        type: 'REMOVE_EXPENSE',
        id
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