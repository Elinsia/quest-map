import { Component } from 'react';
import PropTypes from 'prop-types';
import MarkerClusterer from 'node-js-marker-clusterer';
import createMarkers from '../services/createMarkers';

class Marker extends Component {
  constructor(props) {
    super(props);

    this.handlerCreateCluster = this.handlerCreateCluster.bind(this);
  }

  componentDidUpdate() {
    this.handlerCreateCluster();
  }

  handlerCreateCluster() {
    const markers = createMarkers(this.props.quests, this.props.map);
    new MarkerClusterer(this.props.map, markers, { // eslint-disable-line  no-new
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  quests: PropTypes.array,
  map: PropTypes.object
};

export default Marker;
