import { combineReducers } from 'redux';
import {
  LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS,
  REGISTRATION_REQUEST, REGISTRATION_FAILURE, REGISTRATION_SUCCESS
} from './Auth.constants';

function auth(state = {
  isAuthenticated: !!localStorage.getItem('token')
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false,
        user: action.creds
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        errorMessage: ''
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        errorMessage: action.message
      });
    case REGISTRATION_REQUEST:
      return Object.assign({}, state, {
        user: action.creds
      });
    case REGISTRATION_SUCCESS:
      return Object.assign({}, state, {
        errorMessage: ''
      });
    case REGISTRATION_FAILURE:
      return Object.assign({}, state, {
        errorMessage: action.message
      });
    case LOGOUT_SUCCESS:
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
