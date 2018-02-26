import { combineReducers } from 'redux';
import { GET_CURRENT_QUEST_SUCCESS, SHOW_ACTIVE_QUESTS_SUCCESS } from '../constants/actionTypes';

function activeQuests(state = {}, action) {
  switch (action.type) {
    case SHOW_ACTIVE_QUESTS_SUCCESS: {
      const citiesQuests = {};
      for (let i = 0; i < action.payload.data.length; i += 1) {
        const key = action.payload.data[i].city;
        if (citiesQuests[key]) {
          citiesQuests[key].push(action.payload.data[i]);
        } else {
          citiesQuests[key] = [action.payload.data[i]];
        }
      }
      return { ...state, ...citiesQuests };
    }
    default:
      return state;
  }
}

function currentQuest(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_QUEST_SUCCESS: {
      return action.payload.data;
    }
    default:
      return state;
  }
}

const questReducer = combineReducers({
  activeQuests, currentQuest
});

export default questReducer;
