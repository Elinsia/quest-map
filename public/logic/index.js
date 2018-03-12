import quests from '../pages/Quests/Quests.logics';
import cities from '../pages/Quests/Cities.logics';
import loginUser from '../pages/Auth/Auth.logics';

const logics = [
  ...cities,
  ...quests,
  ...loginUser
];

export default logics;
