import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';

const Header = () => {
   
    
    return(
        <header>
            <h1>EXPENSIFY</h1>
            <NavLink  to='/' activeClassName='is-active' exact={true}>HOME   </NavLink>
            <NavLink  to='/create' activeClassName='is-active'>CREATE         </NavLink>
            <NavLink  to='/help' activeClassName='is-active'>HELP           </NavLink>
        </header>
    )
}

export {Header as default};