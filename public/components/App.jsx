import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header.container';
import Menu from './Menu/Menu.container';
import Wrap from './Wrap/Wrap.container';

const App = props => (
  <div>
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
  children: PropTypes.node.isRequired
};

export default App;
