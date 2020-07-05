import React from 'react';

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// components
import Header from '../components/Header.js';
import ExpenseDashboard from '../components/ExpenseDashboard.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
 
function AppRouter(){
    return(
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/create" component={AddExpensePage} exact={true} />
                {/*  /edit/:id works here. Try to change url manually in the pseudo-browser url bar */}
                <Route  path="/edit:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    
        </BrowserRouter>
    )

}


export {AppRouter as default};