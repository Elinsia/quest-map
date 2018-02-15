import React, { Component } from 'react';
import MarkerClusterer from 'js-marker-clusterer';
import Markers from 'Markers';

class Markers extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    var markerCluster = new MarkerClusterer(map, markers); // map - google map, markers - marker array
     }
  }
  render() {
    return null;
  }
}

export default Markers;
