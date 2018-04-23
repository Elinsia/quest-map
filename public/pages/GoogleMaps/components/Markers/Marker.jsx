import { Component } from 'react';
import PropTypes from 'prop-types';
import MarkerClusterer from 'node-js-marker-clusterer';
import createMarkers from 'Public/services/createMarkers';

class Marker extends Component {
  constructor(props) {
    super(props);

    this.markers = null;

    this.handlerCreateCluster = this.handlerCreateCluster.bind(this);
  }

  componentDidUpdate() {
    this.handlerCreateCluster();
  }

  handlerCreateCluster() {
    if (this.props.quests !== undefined) {
      const markers = createMarkers(this.props.quests, this.props.map);
      this.markers = new MarkerClusterer(this.props.map, markers, { // eslint-disable-line  no-new
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
      });
    }
  }

  render() {
    return null;
  }
}

Marker.propTypes = {
  quests: PropTypes.array,
  map: PropTypes.object
};
Marker.defaultProps = {
  quests: [],
  map: {}
};

export default Marker;
