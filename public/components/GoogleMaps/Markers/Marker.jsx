import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Marker extends Component {
  constructor(props) {
    super(props);

    this.marker = new google.maps.Marker({
      position: {
        lat: this.props.point.latitude,
        lng: this.props.point.longitude
      },
      label: "!",
      map: this.props.map,
      draggable: false
    });
  }

  conponentWillUnmount() {
    this.marker.setMap(null);
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  point: PropTypes.object.isRequired,
  map: PropTypes.object.isRequired
};

export default Marker;
