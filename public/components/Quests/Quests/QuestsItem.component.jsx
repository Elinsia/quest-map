import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CrossIcon from '../../Icons/CrossIcon';

class QuestsItem extends Component {
  constructor() {
    super();

    this.handleUpdateActiveQuest = this.handleUpdateActiveQuest.bind(this);
    this.handleCompleteQuest = this.handleCompleteQuest.bind(this);
  }

  handleUpdateActiveQuest() {
    const active = this.props.activeQuest.active;
    this.props.updateQuests(this.props.activeQuest._id, !active);
  }

  handleCompleteQuest() {
    const completed = this.props.activeQuest.complete;
    this.props.updateQuests(this.props.activeQuest._id, !completed);
  }

  render() {
    return (
      <div className="ada-row">
        <div className="ada-col-md-6">
          <div className="quest__title">
            <Link to={`/quests/${this.props.activeQuest._id}`}>{this.props.activeQuest.title}</Link>
          </div>
        </div>
        <div className="ada-col-md-2">
          <div className="quest__score">
            {this.props.activeQuest.score}
          </div>
        </div>
        <div
          className="ada-col-md-2"
          onClick={this.handleUpdateActiveQuest}
          onKeyPress={this.handleUpdateActiveQuest}
          role="button"
          tabIndex="0"
        >
          <CrossIcon />
        </div>
        <div
          className="ada-col-md-2"
          onClick={this.handleCompleteQuest}
          onKeyPress={this.handleCompleteQuest}
          role="button"
          tabIndex="0"
        >
          <button>Accept</button>
        </div>
      </div>
    );
  }
}

QuestsItem.propTypes = {
  activeQuest: PropTypes.object.isRequired,
  updateQuests: PropTypes.func.isRequired
};

export default QuestsItem;
