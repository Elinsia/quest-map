import React, { Component } from 'react';
import PropTypes from 'prop-types';
import App from '../components/App';

class AppPage extends Component {
  render() {
    return (
      <App>
        {this.props.children}
      </App>
    );
  }
}

export default AppPage;

AppPage.propTypes = {
  children: PropTypes.node.isRequired
};
