import moment from 'moment';


const filterReducerDefaultStae = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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

export { filterReducer as default }