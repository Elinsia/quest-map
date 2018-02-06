import React, { Component } from 'react';

class MapCreator extends Component {
  constructor(props) {
    super(props);

    const centerUkraine = { lat: 49.0139, lng: 31.2858 };
    this.mapOptions = {
      center: centerUkraine,
      zoom: 6
    };
  }

  componentDidMount() {
    this.map = new google.maps.Map(
      this.mapContainer,
      this.mapOptions
    );
  }
  render() {
    return (
      <div id="map" ref={el => this.mapContainer = el} /> // eslint-disable-line no-return-assign
    );
  }
}

export default MapCreator;
