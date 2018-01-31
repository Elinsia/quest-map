import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    try {
      const mapOptions = {
        center: { lat: 49.0139, lng: 31.2858 },
        zoom: 6
      };
      new google.maps.Map(document.getElementById('map'), mapOptions);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div id="map" />
    );
  }
}

export default Map;
