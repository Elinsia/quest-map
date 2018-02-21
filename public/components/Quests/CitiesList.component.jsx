import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CitiesItem from './CitiesItem.component';

class CitiesList extends Component {
  componentWillMount() {
    this.props.showActiveCities();
  }

  render() {
    const activeCities = this.props.citiesActiveList;

    if (!activeCities) {
      return null;
    }

    return (
      <div className="ada-row">
        <div className="ada-col-md-4">
          <div className="ada-panel">
            {activeCities.map(city => (
              <CitiesItem
                key={city._id}
                activeCity={city}
                id={city._id}
              />
            ))}
          </div>
        </div>
        <div className="ada-col-md-8">
          <div className="quest__content" />
        </div>
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
