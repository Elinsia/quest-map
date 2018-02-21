import { combineReducers } from 'redux';
import { SHOW_ACTIVE_CITIES_SUCCESS } from '../constants/actionTypes';

function activeCities(state = [], action) {
  switch (action.type) {
    case SHOW_ACTIVE_CITIES_SUCCESS:
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}

const cityReducer = combineReducers({
  activeCities
});

export default cityReducer;
