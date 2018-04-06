import quests from '../pages/Quests/Quests.logics';
import cities from '../pages/Quests/Cities.logics';
import auth from '../pages/Auth/Auth.logics';
import users from '../pages/Profile/Users.logics';

const logics = [
  ...cities,
  ...quests,
  ...auth,
  ...users
];

export default logics;
