const expensesReducerDefaultState = [];

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

export {expensesReducer as default}