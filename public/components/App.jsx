import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';

const App = props => (
  <div>
    <div className="wrap">
      <Header />
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired
};

export default App;
