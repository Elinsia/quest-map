import { combineReducers } from 'redux';
import QuestsReducer from './questsReducer';
import MenuReducer from './menuReducer';

const rootReducer = combineReducers({
  quests: QuestsReducer,
  menu: MenuReducer
});

export default rootReducer;
