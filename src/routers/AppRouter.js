import React from 'react';

import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';

// components
import ExpenseDashboard from '../components/ExpenseDashboard.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';
import LoginPage from '../components/LoginPage.js'; 
import PrivateRoute from './PrivateRoute'
import {createBrowserHistory} from 'react-router/node_modules/history';
export const history = createBrowserHistory(); 

function AppRouter(){
    return(
        <Router history={history}>
        <div>
            
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
                <PrivateRoute path="/create" component={AddExpensePage}  />
                {/*  /edit/:id works here. Try to change url manually in the pseudo-browser url bar */}
                <PrivateRoute  path="/edit:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    
        </Router>
    )

}


export {AppRouter as default};