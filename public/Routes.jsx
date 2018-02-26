import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ActiveQuest from './pages/ActiveQuest';
import Map from './components/GoogleMaps/Map/index';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/map" component={Map} />
        <Route path="/quests" component={ActiveQuest} />
      </Switch>
    );
  }
}

export default Routes;
