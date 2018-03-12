import { LOGIN_REQUEST } from './Auth.constants';

export function requestLogin(creds) { // eslint-disable-line import/prefer-default-export
  return {
    type: LOGIN_REQUEST,
    isAuthenticated: false,
    creds
  };
}
