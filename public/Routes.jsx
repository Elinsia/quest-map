import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        <PrivateRoute path="/quests" component={ActiveQuest} />
        <PrivateRoute path="/profile" component={Users} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Registration} />
      </Switch>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => ( // eslint-disable-line no-shadow
  <Route
    {...rest}
    render={props =>
      (localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            from: props.location
          }}
        />
      ))
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
};
PrivateRoute.defaultProps = {
  location: {}
};

export default Routes;
