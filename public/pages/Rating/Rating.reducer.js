import { combineReducers } from 'redux';
import { RATING_SUCCESS, RATING_FAILURE } from './Rating.constants';

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

const ratingReducer = combineReducers({
  rating
});

export default ratingReducer;
