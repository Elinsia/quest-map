import { combineReducers } from 'redux';
import {
  GET_CURRENT_QUEST_SUCCESS, SHOW_QUESTS_SUCCESS, UPDATE_QUESTS_SUCCESS,
  SET_VISIBILITY_FILTER, VisibilityFilters
} from './Quests.constants';

const { SHOW_ALL } = VisibilityFilters;

function citiesQuests(state = {}, action) {
  switch (action.type) {
    case SHOW_QUESTS_SUCCESS: {
      const cityQuests = {};
      for (let i = 0; i < action.payload.data.length; i += 1) {
        const key = action.payload.data[i].city;
        if (cityQuests[key]) {
          cityQuests[key].push(action.payload.data[i]);
        } else {
          cityQuests[key] = [action.payload.data[i]];
        }
      }
      return { ...state, ...cityQuests };
    }
    case UPDATE_QUESTS_SUCCESS: {
      const cityId = action.payload.data.city;

      return {
        ...state,
        [cityId]: state[cityId].map((quest) => {
          if (quest._id === action.payload.data._id) {
            return action.payload.data;
          }
          return quest;
        })
      };
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

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.filter;
    }
    default:
      return state;
  }
}

const questReducer = combineReducers({
  citiesQuests, currentQuest, visibilityFilter
});

export default questReducer;
