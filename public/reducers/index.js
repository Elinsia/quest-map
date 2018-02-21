import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import QuestsReducer from './quests';
import CitiesReducer from './cities';
import MenuReducer from './menu';

const rootReducer = combineReducers({
  cities: CitiesReducer,
  quests: QuestsReducer,
  menu: MenuReducer,
  router: routerReducer
});

export default rootReducer;
