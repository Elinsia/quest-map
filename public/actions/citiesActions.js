import { createLogic } from 'redux-logic';
import {
  SHOW_ACTIVE_CITIES, SHOW_ACTIVE_CITIES_SUCCESS, SHOW_ACTIVE_CITIES_FAILURE
} from '../constants/actionTypes';

export function showActiveCities(request) {
  return {
    type: SHOW_ACTIVE_CITIES,
    request
  }
}

const getActiveCities = createLogic({
  type: SHOW_ACTIVE_CITIES,
  latest: true,

  process({}, dispatch, done) {
    fetch('http://localhost:3000/cities')
      .then(res => res.json())
      .then((res) => {
        dispatch({
          type: SHOW_ACTIVE_CITIES_SUCCESS,
          payload: res
        });
        done();
      })
      .catch((res) => {
        dispatch({
          type: SHOW_ACTIVE_CITIES_FAILURE,
          payload: res
        });
        done();
      });
  }
});

export default [getActiveCities];
