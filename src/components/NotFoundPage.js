import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => {
    return(
        <div>
            404!! <Link to='/'>Go Home</Link>
        </div>
    )
}

export {NotFoundPage as default};