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
    this.props.initMap(map);

    google.maps.event.addListener(map, 'click', function( event ){
      console.log( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() );
   });

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }; 
        let marker = new google.maps.Marker({map: map});
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

export default MapCreator;
