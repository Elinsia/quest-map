import { combineReducers } from 'redux';
import QuestsReducer from './questsReducer';

const rootReducer = combineReducers({
  quests: QuestsReducer
});

export default rootReducer;
