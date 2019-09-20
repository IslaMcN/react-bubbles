import React from 'react';
import BubblePage from '../BubblePage';

const PrivateRoute = ({ component: BubblePage, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <BubblePage {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  export default PrivateRoute;
  