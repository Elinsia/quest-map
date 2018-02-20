import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppPage from './pages/AppPage';
import ActiveQuest from './pages/ActiveQuest';
import Map from './components/Map/Map';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AppPage} />
        <Route path="/quests" component={ActiveQuest} />
        <Route path="/map" component={Map} />
      </Switch>
    );
  }
}

export default Routes;
