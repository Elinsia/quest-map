import { combineReducers } from 'redux';
import { RATING_SUCCESS, RATING_FAILURE, CURR_PLACE_SUCCESS, CURR_PLACE_FAILURE } from './Rating.constants';

function rating(state = {}, action) {
  switch (action.type) {
    case RATING_SUCCESS:
      return action.data;
    case RATING_FAILURE:
      return { ...state, errorMessage: action.message };
    default:
      return state;
  }
}

function currPlace(state = {}, action) {
  switch (action.type) {
    case CURR_PLACE_SUCCESS:
      return action.data;
    case CURR_PLACE_FAILURE:
      return { ...state, errorMessage: action.message };
    default:
      return state;
  }
}

const ratingReducer = combineReducers({
  rating, currPlace
});

export default ratingReducer;
