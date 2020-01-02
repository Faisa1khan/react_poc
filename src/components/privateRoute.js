import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
    return (
      <Route {...rest} render={({ location }) =>
            localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).token 
                ? (
                children
                ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}/>
                )
        }/>
    )
}

  export default PrivateRoute;