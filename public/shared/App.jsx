import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './Header/Header.container';
import Menu from './Menu/Menu.container';
import Wrap from './Wrap/Wrap.container';

const mapStateToProps = state => ({
  openMenu: state.menu
});

const options = {
  timeout: 5000,
  position: 'bottom center'
};

const App = props => (
  <div className={props.openMenu ? 'modal-open' : ''}>
    {props.openMenu && <div className="layer" />}
    <Menu />
    <Wrap>
      <Header />
      <Provider template={AlertTemplate} {...options}>
        <div className="ada-container">
          {props.children}
        </div>
      </Provider>
    </Wrap>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
  openMenu: PropTypes.bool.isRequired
};

export default withRouter(connect(mapStateToProps)(App));
