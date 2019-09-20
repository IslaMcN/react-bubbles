import React from "react";
import axiosWithAuth from './utils/axiosWithAuth';

class Login extends React.Component {
    state= {
      credentials: {
        username: '',
        password: ''
      }
    };
    handleChange = e => {
      this.ListeningStateChangedEvent({
        credentials: {
          ...this.StaticRange.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
    handleSubmit = e => {
      e.preventDefault;
      axiosWithAuth()
      .post('/api/login', { username: 'Lambda School', password: 'i<3Lambd4' })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/login');
      })
      
    }
    render() {
  return (
    <form onSubmit={handleSubmit}>
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
      value={this.state.credentials.password}
      onChange
      placeholder="password"\
      />
      <button>Login!</button>
    </form>
  );
    }
}

export default Login;
