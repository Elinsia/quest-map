import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import QuestsReducer from '../pages/Quests/Quests.reducer';
import CitiesReducer from '../pages/Quests/Cities.reducer';
import MapReducer from '../pages/GoogleMaps/Map.reducer';
import MenuReducer from '../shared/Menu/Menu.reducer';
import authReducer from '../pages/Auth/Auth.reducer';

const rootReducer = combineReducers({
  cities: CitiesReducer,
  quests: QuestsReducer,
  map: MapReducer,
  menu: MenuReducer,
  auth: authReducer,
  router: routerReducer
});

export default rootReducer;
