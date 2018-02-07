import {
  SET_VISIBILITY_FILTER, SET_DISPLAY_FILTER, TOGGLE_QUEST,
  VisibilityFilters, DisplayFilter
} from '../constants/actionTypes';

const { SHOW_ALL } = VisibilityFilters;
const { HIDE } = DisplayFilter;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function displayFilter(state = HIDE, action) {
  switch (action.type) {
    case SET_DISPLAY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function quests(state = [], action) {
  switch (action.type) {
    case TOGGLE_QUEST:
      return state.map((quest, index) => {
        if (index === action.index) {
          return Object.assign({}, quest, {
            completed: !quest.completed
          });
        }
        return quest;
      });
    default:
      return state;
  }
}

export default function (state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    displayFilter: displayFilter(state.displayFilter, action),
    quests: quests(state.quests, action)
  };
}
