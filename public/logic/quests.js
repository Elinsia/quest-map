import { createLogic } from 'redux-logic';
import {
  GET_CURRENT_QUEST, GET_CURRENT_QUEST_FAILURE, GET_CURRENT_QUEST_SUCCESS,
  SHOW_QUESTS, SHOW_QUESTS_FAILURE, SHOW_QUESTS_SUCCESS,
  UPDATE_QUESTS, UPDATE_QUESTS_FAILURE, UPDATE_QUESTS_SUCCESS
} from '../constants/actionTypes';

const getQuests = createLogic({
  type: SHOW_QUESTS,
  latest: true,

  process(_, dispatch, done) {
    fetch('http://localhost:3000/quests', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res => res.json())
      .then((res) => {
        dispatch({
          type: SHOW_QUESTS_SUCCESS,
          payload: res
        });
        done();
      })
      .catch((res) => {
        dispatch({
          type: SHOW_QUESTS_FAILURE,
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
    fetch(`http://localhost:3000/quests/${action.id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res => res.json())
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

const updateQuest = createLogic({
  type: UPDATE_QUESTS,
  latest: true,

  process({ action }, dispatch, done) {
    fetch(`http://localhost:3000/quests/${action.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        active: action.payload,
        complete: action.payload
      })
    }).then(res => res.json())
      .then((res) => {
        dispatch({
          type: UPDATE_QUESTS_SUCCESS,
          payload: res
        });
        done();
      })
      .catch((res) => {
        dispatch({
          type: UPDATE_QUESTS_FAILURE,
          payload: res
        });
        done();
      });
  }
});

export default [getQuests, showCurrentQuest, updateQuest];
