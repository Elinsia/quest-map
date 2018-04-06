import { createLogic } from 'redux-logic';
import { ME_FROM_TOKEN_REQUEST, UPDATE_USERS_REQUEST } from './Users.constants';
import { receiveMeFromToken, meFromTokenError, receiveUpdateUsers, updateUsersError } from './Users.actions';

const meFromToken = createLogic({
  type: ME_FROM_TOKEN_REQUEST,
  latest: true,

  process(_, dispatch, done) {
    fetch('http://localhost:3000/users/data/profile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          dispatch(meFromTokenError(user.error.message));
          return Promise.reject(user);
        }
        dispatch(receiveMeFromToken(user));
        done();
      })
      .catch(err => console.log('Error: ', err));
  }
});

const updateUser = createLogic({
  type: UPDATE_USERS_REQUEST,
  latest: true,

  process({ action }, dispatch, done) {
    fetch(`http://localhost:3000/users/${action.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify(action.creds)
    })
      .then(res => res.json()
        .then(user => ({ user, res })))
      .then(({ user, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          dispatch(updateUsersError(user.error.message));
          return Promise.reject(user);
        }
        dispatch(receiveUpdateUsers(user));
        done();
      })
      .catch(err => console.log('Error: ', err));
  }
});

export default [meFromToken, updateUser];
