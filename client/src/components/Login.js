import React from "react";
import axios from 'axios';

const Login = (props) => {
  axios.post('/api/login', { username: 'Lambda School', password: 'i<3Lambd4' })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      props.history.push('/login');
    })
  
  return (
    <form>
      <h1>Welcome to the Bubble App!</h1>
      <p>Login in here!</p>
      <input
      type="text"
      name="username"
      placeholder="username"
      />
      <input
      type="password"
      name="password"
    </form>
  );
}

export default Login;
