import { createLogic } from 'redux-logic';
import { SHOW_ACTIVE_CITIES, SHOW_ACTIVE_CITIES_FAILURE, SHOW_ACTIVE_CITIES_SUCCESS } from './Cities.constants';

const getActiveCities = createLogic({
  type: SHOW_ACTIVE_CITIES,
  latest: true,

  process(_, dispatch, done) {
    fetch('http://localhost:3000/cities', {
      headers: {}
    })
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
