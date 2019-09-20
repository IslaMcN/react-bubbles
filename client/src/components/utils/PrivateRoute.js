import React from 'react';
import BubblePage from '../BubblePage';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
   return( 
    <Route
      {...rest}
      render={() =>{
       if (localStorage.getItem('token'))  {
          return <BubblePage  />;
        } else {
          return <Redirect to="/login" />;
        }}
      }
    />)
  };

  export default PrivateRoute;
  