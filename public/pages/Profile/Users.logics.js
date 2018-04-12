import { createLogic } from 'redux-logic';
import { ME_FROM_TOKEN_REQUEST, UPDATE_USERS_REQUEST } from './Users.constants';
import { receiveMeFromToken, meFromTokenError, receiveUpdateUsers, updateUsersError } from './Users.actions';

const baseUrl = process.env.API_URL;

const meFromToken = createLogic({
  type: ME_FROM_TOKEN_REQUEST,
  latest: true,

  process(_, dispatch, done) {
    fetch(`${baseUrl}/users/data/profile`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(user);
        }
        dispatch(receiveMeFromToken(user));
        done();
      })
      .catch((err) => {
        dispatch(meFromTokenError(err));
      });
  }
});

const updateUser = createLogic({
  type: UPDATE_USERS_REQUEST,
  latest: true,

  process({ action }, dispatch, done) {
    fetch(`${baseUrl}/users/${action.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(action.creds)
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(user);
        }
        dispatch(receiveUpdateUsers(user));
        done();
      })
      .catch((err) => {
        dispatch(updateUsersError(err));
      });
  }
});

export default [meFromToken, updateUser];
