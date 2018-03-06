import { INIT_MAP } from './Map.constants';

export default function initMap(payload) {
  return {
    type: INIT_MAP,
    payload
  };
}
