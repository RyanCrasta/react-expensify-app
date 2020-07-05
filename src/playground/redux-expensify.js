import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid'; // to generate some random ID

const demoState = {
    expenses: [{
        id: '12345',
        description: 'Jan rent',
        note: 'THis was final payment',
        amount: 5000,
        createdAt: 0
    }],

    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined 
    }
}


const expensesReducerDefaultState = []


// expenses reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
            // return state.concat(action.expense); 
            // v dont want ot chnage state but just read state so use concat instead of push
        
        case 'REMOVE_EXPENSE':
            return state.filter((ele) => {
                return(ele.id !== action.id)
            })
        
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }
}

const filterReducerDefaultStae = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined 
}

// filter reducers
const filterReducer = (state = filterReducerDefaultStae, action) => {
    switch(action.type){

        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text: action.msg
            }
        
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            }
        
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            }
        
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.start
            }
        
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.end
            }

        default:
            return state
    }
}

// selectors folder
// get visible expenses 
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
       const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
       
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            // bada se chota
            return a.createdAt < b.createdAt ?  1 :  -1 
        }else{
            return a.amount < b.amount ? 1 : -1
        }
    })
}
 
 





// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);

})


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

//SET_TEXT_FILTER
const setTextFilter = (msg = '') => {
    return{
        type: 'SET_TEXT_FILTER',
        msg
    }
}

// SORT_BY_DATE
const sortByDate = () => {
    return{
        type: 'SORT_BY_DATE'
    }
}


// SORT_BY_AMOUNT
const sortByAmount = () => {
    return{
        type:'SORT_BY_AMOUNT'
    }
}

// SET_START_DATE
const setStartDate = (start = undefined) => {
    return{
        type: 'SET_START_DATE',
        start
    }
}

// SET_END_DATE
const setEndDate = (end = undefined) => {
    return{
        type: 'SET_END_DATE',
        end
    }
}

const expense1 = store.dispatch(addExpense({description: 'Icecream', amount: 35, createdAt:5000}))
const expense2 =store.dispatch(addExpense({description: 'Juice', amount: 95, createdAt: 1000}))
store.dispatch(sortByAmount());

//store.dispatch(removeExpense({id: expense1.expense.id}))

//console.log(expense1.expense.id);

/*
store.dispatch(editExpense(
    expense2.expense.id,
    {
        amount: 500
    }
    
))*/
//store.dispatch(setStartDate(125));
//store.dispatch(setTextFilter('ju'));


// filter
/*
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));
store.dispatch(setEndDate());
*/