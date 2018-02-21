import React from 'react';
import PropTypes from 'prop-types';

const App = props => (
  <div>
    <div className="wrap">
      {props.children}
    </div>
  </div>
);

export default App;

App.propTypes = {
  children: PropTypes.node.isRequired
};