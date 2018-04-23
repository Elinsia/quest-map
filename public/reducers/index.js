import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import questReducer from '../pages/Quests/Quests.reducer';
import cityReducer from '../pages/Quests/Cities.reducer';
import MapReducer from '../pages/GoogleMaps/Map.reducer';
import MenuReducer from '../shared/Menu/Menu.reducer';
import authReducer from '../pages/Auth/Auth.reducer';
import userReducer from '../pages/Profile/Users.reducer';

const rootReducer = combineReducers({
  cities: cityReducer,
  quests: questReducer,
  users: userReducer,
  map: MapReducer,
  menu: MenuReducer,
  auth: authReducer,
  router: routerReducer
});

export default rootReducer;
