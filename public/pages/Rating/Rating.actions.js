import {
  RATING_REQUEST, RATING_SUCCESS, RATING_FAILURE,
  CURR_PLACE_REQUEST, CURR_PLACE_SUCCESS, CURR_PLACE_FAILURE
} from './Rating.constants';

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

export const requestCurrPlace = () => ({ type: CURR_PLACE_REQUEST });

export function receiveCurrPlace(data) {
  return {
    type: CURR_PLACE_SUCCESS,
    data
  };
}

export function currPlaceError(message) {
  return {
    type: CURR_PLACE_FAILURE,
    message
  };
}
