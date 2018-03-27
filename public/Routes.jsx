import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ActiveQuest from './pages/Quests/components/Quests/Quests';
import Map from './pages/GoogleMaps/components/Map/index';
import Login from './pages/Auth/Login.container';
import Registration from './pages/Auth/Registration.container';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/map" component={Map} />
        <Route path="/quests" component={ActiveQuest} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Registration} />
      </Switch>
    );
  }
}

export default Routes;
