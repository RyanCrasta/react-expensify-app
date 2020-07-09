import { NavLink} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

export const Header = (props) => {

    return(
        <header>
            <h1>EXPENSIFY</h1>
            <NavLink  to='/dashboard' activeClassName='is-active' >HOME   </NavLink>
            <NavLink  to='/create' activeClassName='is-active'>CREATE     </NavLink>
            <button onClick={props.startLogOut()}>Logout</button>
        </header>
    )
}

const connectedHeader = connect(() => {
    return{
        startLogOut: () => startLogOut()
    }
})(Header)

export {connectedHeader as default};