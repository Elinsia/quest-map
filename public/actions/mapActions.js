import { INIT_MAP } from '../constants/actionTypes';

export function initMap(payload) {
  return {
    type: INIT_MAP,
    payload
  }
}
