import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ActiveQuest from './pages/Quests/components/Quests/Quests';
import Map from './pages/GoogleMaps/components/Map/index';
import Login from './pages/Auth/components/Login.container';
import Registration from './pages/Auth/components/Registration.container';
import Users from './pages/Profile/Users.container';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/map" component={Map} />
        <Route path="/quests" component={ActiveQuest} />
        <Route path="/profile" component={Users} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Registration} />
      </Switch>
    );
  }
}

export default Routes;
