import { combineReducers } from 'redux';
import QuestsReducer from './quests';
import CitiesReducer from './cities';
import MapReducer from './map';

const rootReducer = combineReducers({
  cities: CitiesReducer,
  quests: QuestsReducer,
  map: MapReducer
});

export default rootReducer;
