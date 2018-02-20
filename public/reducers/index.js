import { combineReducers } from 'redux';
import QuestsReducer from './quests';
import CitiesReducer from './cities';
import MenuReducer from './menuReducer';

const rootReducer = combineReducers({
  cities: CitiesReducer,
  quests: QuestsReducer,
  menu: MenuReducer

});

export default rootReducer;
