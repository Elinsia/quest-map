import { createLogic } from 'redux-logic';
import {
  SHOW_ACTIVE_QUESTS, SHOW_ACTIVE_QUESTS_SUCCESS, SHOW_ACTIVE_QUESTS_FAILURE,
  GET_CURRENT_QUEST, GET_CURRENT_QUEST_SUCCESS, GET_CURRENT_QUEST_FAILURE
} from '../constants/actionTypes';

export function showActiveQuests(request) {
  return {
    type: SHOW_ACTIVE_QUESTS,
    request
  };
}

export function getCurrentQuest(id) {
  return {
    type: GET_CURRENT_QUEST,
    id
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

const showCurrentQuest = createLogic({
  type: GET_CURRENT_QUEST,
  latest: true,

  process({ action }, dispatch, done) {
    fetch(`http://localhost:3000/quests/${action.id}`)
      .then(res => res.json())
      .then((res) => {
        dispatch({
          type: GET_CURRENT_QUEST_SUCCESS,
          payload: res
        });
        done();
      })
      .catch((res) => {
        dispatch({
          type: GET_CURRENT_QUEST_FAILURE,
          payload: res
        });
        done();
      });
  }
});

export default [getActiveQuests, showCurrentQuest];
