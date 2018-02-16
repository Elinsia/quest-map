import React, { Component } from 'react';
//import MarkerClusterer from 'node-js-marker-clusterer';
import Marker from './Marker';

class Markers extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.props.showActiveQuests();
  }

  render() {
    //let markerCluster = new MarkerClusterer(this.props.map, markers);
    return (
      <div>
        {
          this.props.quests.map((quest, id) => (
            <Marker
              key={id}
              point={quest.point}
              map={this.props.map}
            />
          ))
        }
      </div>
    );
  }
}

export default Markers;
