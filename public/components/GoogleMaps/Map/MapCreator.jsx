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
    let map = new google.maps.Map(
      this.mapContainer,
      this.mapOptions
    );
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        let infoWindow = new google.maps.InfoWindow({map: map});
        infoWindow.setOptions({
          position: pos,
          content: 'You are here.'
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

export default MapCreator;
