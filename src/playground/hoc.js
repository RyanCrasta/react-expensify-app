// HIGHER ORDER COMPONENT
// A component (HOC) that renders another component
// advantages of HOC
/* 
1) reuse code 2) render hijacking
3) prop manipulation 4) abstract state
*/

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return(
        <div>
            <h1>
                info
            </h1>
            <p>This info is: {props.info}</p>
            
        </div>
    )
}

// 1) create a regular fn not a react component

const withAdminWarning = (WrappedComponent) => {
    return (
        (props) => {
        return(
            <div>
                {props.isAdmin && <p>This is private msg</p>}
                <WrappedComponent {...props}/>
            </div>
        )
    })
}

const requireAuthentication = (WrappedComponent) => {
    return(
        (props) => {
            return(
                <div>
                    {props.isAuthenticate ? <WrappedComponent {...props}/> : <p>Please Login</p>}
                </div>
            )
        }
    )
}


const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info);



//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticate={true} info="These are the details"/>, document.getElementById('app'))
