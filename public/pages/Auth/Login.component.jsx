import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  handleClick() {
    const login = this.login;
    const password = this.password;
    const creds = { login: login.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds);
  }

  render() {
    return (
      <div>
        <input type="text" ref={(login) => { this.login = login; }} />
        <input type="password" ref={(password) => { this.password = password; }} />
        <button onClick={() => this.handleClick()}>
          Login
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired
};

export default Login;
