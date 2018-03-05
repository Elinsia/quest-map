import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenIcon from '../../Icons/OpenIcon';
import QuestsList from '../Quests/QuestsList.container';

class CitiesItem extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };

    this.toggleActiveCities = this.toggleActiveCities.bind(this);
  }

  toggleActiveCities() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div className="ada-panel__item">
        <div
          className="ada-panel__header"
          onClick={this.toggleActiveCities}
          onKeyPress={this.toggleActiveCities}
          role="button"
          tabIndex="0"
        >
          <div className="ada-panel__text">
            {this.props.activeCity.title}
          </div>
          <OpenIcon iconClass={`ada-panel__icon ${this.state.isOpen ? 'ada-panel__icon--active' : ''}`} />
        </div>
        <QuestsList cityId={this.props.id} className={`ada-panel__content ${this.state.isOpen ? 'open' : ''}`} />
      </div>
    );
  }
}

CitiesItem.propTypes = {
  activeCity: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
};

export default CitiesItem;
