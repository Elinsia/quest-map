import { INIT_MAP } from '../constants/actionTypes';

export default function initMap(payload) {
  return {
    type: INIT_MAP,
    payload
  };
}
