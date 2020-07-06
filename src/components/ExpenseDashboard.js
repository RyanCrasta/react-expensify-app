import React from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js' 
import ExpenseSummary from './ExpenseSummary.js';

const ExpenseDashboard = () => {
    return(
        <div>
            <ExpenseSummary />
            <ExpenseListFilters />
            <ExpenseList />
        </div>
    )
}

export {ExpenseDashboard as default};

