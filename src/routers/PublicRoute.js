
import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated, 
    component: Componenet,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard"/>
        ): (
            <Componenet {...props}/>
        )
)}/>
)

const connectedPublicRoute = connect((state) => {
    return{
        isAuthenticated: !!state.auth.uid
    }
})(PublicRoute)
export {connectedPublicRoute as default};