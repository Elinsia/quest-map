import { createLogic } from 'redux-logic';
import { LOGIN_REQUEST } from './Auth.constants';
import { loginError, receiveLogin } from './Auth.actions';

const loginUser = createLogic({
  type: LOGIN_REQUEST,
  latest: true,

  process({ action }, dispatch) {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        login: action.creds.login,
        password: action.creds.password
      })
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          dispatch(loginError(user.error.message));
          return Promise.reject(user);
        }

        localStorage.setItem('token', user.token);
        dispatch(receiveLogin(user));
      })
      .catch(err => console.log('Error: ', err));
  }
});

export default [loginUser];
