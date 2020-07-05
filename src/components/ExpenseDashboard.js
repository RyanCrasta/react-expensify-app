import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js' 

const ExpenseDashboard = () => {
    return(
        <div>
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
}

export {ExpenseDashboard as default};

