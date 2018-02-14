import { combineReducers } from 'redux';
import { SHOW_ACTIVE_CITIES_SUCCESS } from '../constants/actionTypes';

function showActiveCities(state = [], action) {
  switch (action.type) {
    case SHOW_ACTIVE_CITIES_SUCCESS:
      return [...state, ...action.payload.obj];
    default:
      return state;
  }
}

const cityReducer = combineReducers({
  showActiveCities
});

export default cityReducer;
