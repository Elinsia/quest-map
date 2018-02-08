import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Quest from './pages/Quest';
import Map from './components/Map/Map';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/quests" component={Quest} />
        <Route path="/map" component={Map} />
      </Switch>
    );
  }
}

export default Routes;
