import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const map = new google.maps.Map(
      this.mapContainer,
      this.mapOptions
    );
    this.props.initMap(map);

    // for dev, remove later
    google.maps.event.addListener(map, 'click', (event) => {
      console.log(`Latitude: ${event.latLng.lat()} longitude: ${event.latLng.lng()}`);
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const marker = new google.maps.Marker({ map });
        marker.setOptions({
          position: pos
        });
      });
    }
  }

  render() {
    return (
      <div id="map" ref={el => this.mapContainer = el} /> // eslint-disable-line no-return-assign
    );
  }
}

MapCreator.propTypes = {
  initMap: PropTypes.func.isRequired
};

export default MapCreator;
