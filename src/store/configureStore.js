import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses.js'
import filterReducer from '../reducers/filters.js'

// store creation


export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}