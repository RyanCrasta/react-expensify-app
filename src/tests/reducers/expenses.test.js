import expenseReducer from '../../reducers/expenses.js';
import expenses from '../fixtures/expenses.js';

test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expenseReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])

})

test('should not remove expense by id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '90'
    }

    const state = expenseReducer(expenses, action)
    expect(state).toEqual(expenses)

})

test('should add an expense',() => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'internet',
            note: 'jio 199',
            amount: 199,
            createdAt: 10
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ])
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'apple',
            note: 'apple juice'
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([{
        ...expenses[0],
        ...action.updates,

    },{
        ...expenses[1]
    },{
        ...expenses[2]
    }

    ])
})

test('should not edit an expense if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '9',
        updates: {
            description: 'apple',
            note: 'apple juice'
        }
    }

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([
        ...expenses
    
    ])
})

