import React, { Component } from 'react';
import MapCreator from './MapCreator.container';
import Markers from '../Markers/Markers.container';

class Map extends Component {
  render() {
    return (
      <div>
        <MapCreator />
        <Markers />
      </div>
    );
  }
}

export default Map;
