import { createLogic } from 'redux-logic';
import {
  SHOW_ACTIVE_QUESTS, SHOW_ACTIVE_QUESTS_SUCCESS, SHOW_ACTIVE_QUESTS_FAILURE
} from '../constants/actionTypes';

export function showActiveQuests(request) {
  return {
    type: SHOW_ACTIVE_QUESTS,
    request
  };
}

const getActiveQuests = createLogic({
  type: SHOW_ACTIVE_QUESTS,
  latest: true,

  process(_, dispatch, done) {
    fetch('http://localhost:3000/quests')
      .then(res => res.json())
      .then((res) => {
        dispatch({
          type: SHOW_ACTIVE_QUESTS_SUCCESS,
          payload: res
        });
        done();
      })
      .catch((res) => {
        dispatch({
          type: SHOW_ACTIVE_QUESTS_FAILURE,
          payload: res
        });
        done();
      });
  }
});

export default [getActiveQuests];
