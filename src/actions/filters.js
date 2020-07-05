
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

export {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate}