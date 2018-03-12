import { combineReducers } from 'redux';
import { LOGIN_FAILURE, LOGIN_SUCCESS } from './Auth.constants';

function auth(state = {
  isAuthenticated: !!localStorage.getItem('token')
}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    default:
      return state;
  }
}

const authReducer = combineReducers({
  auth
});

export default authReducer;
