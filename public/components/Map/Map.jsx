import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    try {
      const mapOptions = {
        center: { lat: 49.0139, lng: 31.2858 },
        zoom: 6
      };
      const map = new google.maps.Map(document.getElementById('map'), mapOptions);
      console.log(map);
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
