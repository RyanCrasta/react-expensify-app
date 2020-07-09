
import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header.js';

export const PrivateRoute = ({
    isAuthenticated, 
    component: Componenet,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header/>
                <Componenet {...props}/>
            </div>
            
        ): (
            <Redirect to="/"/>
        )
)}/>
)

const connectedPrivateRoute = connect((state) => {
    return{
        isAuthenticated: !!state.auth.uid
    }
})(PrivateRoute)
export {connectedPrivateRoute as default};