import { OPEN_MENU, CLOSE_MENU } from '../constants/actionTypes';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = false;

export default function menu(state = initialState, action) {
  switch (action.type) {
    case OPEN_MENU:
      return true;
    case CLOSE_MENU:
    case LOCATION_CHANGE:
      return false;
    default:
      return state;
  }
}
