import { createLogic } from 'redux-logic';
import { RATING_REQUEST } from './Rating.constants';
import { receiveRating, ratingError } from './Rating.actions';

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

export default [rating];
