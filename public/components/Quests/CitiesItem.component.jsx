import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenIcon from '../Icons/OpenIcon';
import QuestList from './QuestList.component';

class CitiesItem extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      classOpen: 'ada-panel__content',
      classRotate: 'ada-icon--small ada-panel__icon'
    };

    this.openList = this.openList.bind(this);
  }

  openList() {
    if (this.state.open) {
      this.setState({
        open: false,
        classOpen: 'ada-panel__content',
        classRotate: 'ada-icon--small ada-panel__icon'
      });
    } else {
      this.setState({
        open: true,
        classOpen: 'ada-panel__content open',
        classRotate: 'ada-icon--small ada-panel__icon ada-panel__icon--active'
      });
    }
  }

  render() {
    return (
      <div
        className="ada-panel__item"
        onClick={this.openList}
        onKeyPress={this.openList}
        role="button"
        tabIndex="0"
      >
        <div className="ada-panel__header">
          <div className="ada-panel__text">
            {this.props.city.title}
          </div>
          <OpenIcon iconClass={this.state.classRotate} />
        </div>
        <QuestList className={this.state.classOpen} />
      </div>
    );
  }
}

CitiesItem.propTypes = {
  city: PropTypes.object.isRequired
};

export default CitiesItem;
