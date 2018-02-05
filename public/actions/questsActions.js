export const TOGGLE_QUEST = 'TOGGLE_QUEST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_DISPLAY_FILTER = 'SET_DISPLAY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const DisplayFilter = {
  OPEN: 'OPEN',
  HIDE: 'HIDE'
};

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
