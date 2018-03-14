import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Marker from './Marker';

class Markers extends Component {
  componentWillMount() {
    this.props.showActiveQuests();
  }

  render() {
    return (
      <Marker
        quests={this.props.quests}
        map={this.props.map}
      />
    );
  }
}

Markers.propTypes = {
  showActiveQuests: PropTypes.func.isRequired,
  map: PropTypes.object,
  quests: PropTypes.array
};
Markers.defaultProps = {
  map: {},
  quests: []
};

export default Markers;
