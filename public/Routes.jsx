import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './pages/App';
import Quest from './pages/Quest';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/quests" component={Quest} />
      </Switch>
    )
  }
}

export default Routes;