import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CitiesItem from './CitiesItem.component';

class CitiesList extends Component {
  componentWillMount() {
    this.props.showActiveCities();
  }

  render() {
    const activeCities = this.props.citiesActiveList;

    return (
      <div className="ada-panel">
        {activeCities.map(city => (
          <CitiesItem
            key={city._id}
            city={city}
          />
          ))}
      </div>
    );
  }
}

CitiesList.propTypes = {
  showActiveCities: PropTypes.func.isRequired,
  citiesActiveList: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quests: PropTypes.array.isRequired
  }).isRequired).isRequired
};

export default CitiesList;