import {
  TOGGLE_QUEST, SET_VISIBILITY_FILTER, SET_DISPLAY_FILTER
} from '../constants/actionTypes';

export function toggleQuest(index) {
  return {
    type: TOGGLE_QUEST,
    index
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}

export function setDisplayFilter(filter) {
  return {
    type: SET_DISPLAY_FILTER,
    filter
  };
}
