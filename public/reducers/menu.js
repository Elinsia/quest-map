import { LOCATION_CHANGE } from 'react-router-redux';
import { OPEN_MENU, CLOSE_MENU } from '../constants/actionTypes';

const initialState = false;

export default function menu(state = initialState, action) {
  switch (action.type) {
    case OPEN_MENU:
      // let newDiv = document.createElement('div');
      // newDiv.classList.add('layer');
      // document.body.appendChild(newDiv);
      // console.log(newDiv);
      // document.body.classList.add('modal-open');
      return true;
    case CLOSE_MENU:
    case LOCATION_CHANGE:
      // let samDiv = document.querySelector('.layer');
      // console.log(samDiv);
      // document.body.classList.toggle('modal-open');
      // document.body.removeChild(samDiv);
      // document.body.classList.remove('modal-open');
      return false;
    default:
      return state;
  }
}
