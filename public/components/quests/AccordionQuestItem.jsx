import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenIcon from '../Icons/OpenIcon';
import QuestList from './QuestList';

class AccordionQuestItem extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      classOpen: 'ada-panel__content',
      classRotate: ''
    };

    this.openList = this.openList.bind(this);
  }

  openList() {
    if (this.state.open) {
      this.setState({
        open: false,
        classOpen: 'ada-panel__content',
        classRotate: ''
      });
    } else {
      this.setState({
        open: true,
        classOpen: 'ada-panel__content open',
        classRotate: 'ada-panel__icon--active'
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
            {this.props.quests.city}
          </div>
          <OpenIcon iconClass={this.state.classRotate} />
        </div>
        <QuestList className={this.state.classOpen} />
      </div>
    );
  }
}

AccordionQuestItem.propTypes = {
  quests: PropTypes.object.isRequired
};

export default AccordionQuestItem;
