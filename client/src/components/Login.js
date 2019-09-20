import React from "react";
import axios from 'axios';

const Login = (props) => {
  axios.post('/api/login', { username: 'Lambda School', password: 'i<3Lambd4' })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      props.history.push('/login');
    })
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
}

export default Login;
