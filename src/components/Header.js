import {Link} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

export const Header = (props) => {

    return(
        <header className="header">
        <div className="content-container">
        <div className="header__content">
            <Link className="header__title" to='/dashboard'>
                <h1>EXPENSIFY</h1>
            </Link>
            <button className=" button button--link" onClick={props.startLogOut()}>Logout</button>
        </div>
        </div>
        </header>
    )
}
 
const connectedHeader = connect(() => {
    return{
        startLogOut: () => startLogOut()
    }
})(Header)

export {connectedHeader as default};