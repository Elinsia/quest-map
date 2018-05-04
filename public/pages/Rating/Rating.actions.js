import { RATING_REQUEST, RATING_SUCCESS, RATING_FAILURE } from './Rating.constants';

export const requestRating = () => ({ type: RATING_REQUEST });

export function receiveRating(data) {
  return {
    type: RATING_SUCCESS,
    data
  };
}

export function ratingError(message) {
  return {
    type: RATING_FAILURE,
    message
  };
}
