import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = (props) => {
    return(
        <div>
            <button onClick={props.startLogin()}>Login</button>
        </div>
    )
}


const ConnectedLoginPage = connect(() => {
    return{
        startLogin: () => startLogin()
    }
})(LoginPage);

 
export {ConnectedLoginPage as default}