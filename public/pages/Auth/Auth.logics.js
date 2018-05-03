import { createLogic } from 'redux-logic';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST, REGISTRATION_REQUEST } from './Auth.constants';
import { loginError, receiveLogin, registrationError, receiveRegistration } from './Auth.actions';

const baseUrl = process.env.API_URL;

const loginUser = createLogic({
  type: LOGIN_REQUEST,
  latest: true,

  process({ action }, dispatch, done) {
    fetch(`${baseUrl}/users/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(action.creds
        // username: action.creds.username,
        // password: action.creds.password
      )
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(user);
        }
        localStorage.setItem('token', user.token);
        dispatch(receiveLogin(user));
        dispatch(push('/quests'));
        done();
      })
      .catch((err) => {
        dispatch(loginError(err));
      });
  }
});

const registrationUser = createLogic({
  type: REGISTRATION_REQUEST,
  latest: true,

  process({ action }, dispatch, done) {
    fetch(`${baseUrl}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(action.creds
        // username: action.creds.username,
        // password: action.creds.password,
        // firstName: action.creds.firstName
      )
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(user);
        }
        dispatch(receiveRegistration(user));
        dispatch(push('/signup'));
        done();
      })
      .catch((err) => {
        dispatch(registrationError(err));
      });
  }
});

export default [loginUser, registrationUser];
