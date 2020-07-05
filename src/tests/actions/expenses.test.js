import {addExpense, removeExpense, editExpense} from '../../actions/expenses.js';

test('should setup remove expense action obj', () => {
    const action = removeExpense({id: '1234'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    })
})


test('should setup edit expense action obj', () => {
    const action = editExpense('12345', {note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345',
        updates: {note: 'new note value'}         
    })
})

test('should setup add expense action obj with provided values', () => {
    const action = addExpense({
        description: 'Rent',
        amount: 645,
        createdAt: 34567,
        note: 'This was last months rent'
    })

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description: 'Rent',
            amount: 645,
            createdAt: 34567,
            note: 'This was last months rent',
            id: expect.any(String)    
        }
    })
})

test('should setup add expense action obj with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description:'', 
            note:'', 
            amount:0, 
            createdAt:0,
            id: expect.any(String)
        }
    })
})


