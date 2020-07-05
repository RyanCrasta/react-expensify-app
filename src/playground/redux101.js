import {createStore} from 'redux';

//reducers
const countReducer = (state = {count:0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1

            return{
                count: state.count - decrementBy
            }
        case 'RESET':
            return{
                count: 0
            }
        case 'SET':
            return{
                count: action.count
            }
        default:
            return state;

    }
    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

})


// Action generators - fnnctions that return action obj
const incrementCount = ({incrementBy = 1} = {}) => {
    return{
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {}) => {
    return{
        type: 'DECREMENT',
        decrementBy
    }
}

const setCount = ({count}) => {
    return{
        type: 'SET',
        count
    }
 }

const resetCount = () => {
    return{
        type: 'RESET'
    }
}

store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(resetCount())

store.dispatch(decrementCount());

store.dispatch(setCount({count: 69}))