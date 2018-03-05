import { SHOW_ACTIVE_CITIES } from '../constants/actionTypes';

export default function showActiveCities(request) {
  return {
    type: SHOW_ACTIVE_CITIES,
    request
  };
}
