import { createLogic } from 'redux-logic';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './Auth.constants';

const loginUser = createLogic({
  type: LOGIN_REQUEST,
  latest: true,

  process({ action }, dispatch, done) {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({
        login: action.creds.login,
        password: action.creds.password
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then((res) => {
        localStorage.setItem('token', res.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res
        });
        done();
      })
      .catch((res) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: res
        });
        done();
      });
  }
});

export default [loginUser];
