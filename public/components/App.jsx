import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header/Header.container';
import Menu from './Menu/Menu.container';
import Wrap from './Wrap/Wrap.container';

const mapStateToProps = state => ({
  openMenu: state.menu
});

const App = props => (
  <div className={props.openMenu ? 'modal-open' : ''}>
    {props.openMenu && <div className="layer" />}
    <Menu />
    <Wrap>
      <Header />
      <div className="ada-container">
        {props.children}
      </div>
    </Wrap>
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
  openMenu: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);
