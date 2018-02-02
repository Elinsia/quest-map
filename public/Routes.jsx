import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './pages/App';
import Quest from './pages/Quest';
import Map from './components/Map/Map';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/quests" component={Quest} />
        <Route path="/map" component={Map} />
      </Switch>
    );
  }
}

export default Routes;
