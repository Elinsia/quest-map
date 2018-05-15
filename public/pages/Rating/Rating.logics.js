import { createLogic } from 'redux-logic';
import { RATING_REQUEST, CURR_PLACE_REQUEST } from './Rating.constants';
import { receiveRating, ratingError, receiveCurrPlace, currPlaceError } from './Rating.actions';

const baseUrl = process.env.API_URL;

const rating = createLogic({
  type: RATING_REQUEST,
  latest: true,

  process(_, dispatch, done) {
    fetch(`${baseUrl}/users/data/rating`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(res => res.json()
        .then(data => ({ data, res })))
      .then(({ data, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(data);
        }
        dispatch(receiveRating(data));
        done();
      })
      .catch((err) => {
        dispatch(ratingError(err));
      });
  }
});

const currPlace = createLogic({
  type: CURR_PLACE_REQUEST,
  latest: true,

  process(_, dispatch, done) {
    fetch(`${baseUrl}/users/data/place`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    })
      .then(res => res.json()
        .then(data => ({ data, res })))
      .then(({ data, res }) => { // eslint-disable-line consistent-return
        if (!res.ok) {
          return Promise.reject(data);
        }
        dispatch(receiveCurrPlace(data));
        done();
      })
      .catch((err) => {
        dispatch(currPlaceError(err));
      });
  }
});

export default [rating, currPlace];
