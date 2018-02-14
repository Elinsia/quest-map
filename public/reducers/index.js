import { combineReducers } from 'redux';
import QuestsReducer from './quests';
import CitiesReducer from './cities';

const rootReducer = combineReducers({
  cities: CitiesReducer,
  quests: QuestsReducer
});

export default rootReducer;
