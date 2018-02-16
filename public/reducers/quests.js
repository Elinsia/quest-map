import { combineReducers } from 'redux';
import { SHOW_ACTIVE_QUESTS_SUCCESS } from '../constants/actionTypes';

function showActiveQuests(state = [], action) {
  switch (action.type) {
    case SHOW_ACTIVE_QUESTS_SUCCESS:
      return [...state, ...action.payload.obj];
    default:
      return state;
  }
}

const questReducer = combineReducers({
  showActiveQuests
});

export default questReducer;
