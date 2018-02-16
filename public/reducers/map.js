import { combineReducers } from 'redux';
import { INIT_MAP } from '../constants/actionTypes';

const initialState = {
  map: null
};

function initMap(state = initialState, action) {
  switch (action.type) {
    case INIT_MAP:
      return Object.assign({}, state, { map: action.payload });
    default:
      return state;
  }
}

const mapReducer = combineReducers({
  initMap
});

export default mapReducer;
