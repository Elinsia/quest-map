import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CitiesListContainer from '../components/Quests/Cities/CitiesList.container';
import ContentQuest from '../components/Quests/Content/ContentQuest.container';

class ActiveQuest extends Component {
  render() {
    return (
      <div className="ada-row">
        <div className="ada-col-md-5">
          <CitiesListContainer />
        </div>
        <div className="ada-col-md-7">
          <Route path={`${this.props.match.url}/:questId`} component={ContentQuest} />
        </div>
      </div>
    );
  }
}

ActiveQuest.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  }).isRequired
};

export default ActiveQuest;
