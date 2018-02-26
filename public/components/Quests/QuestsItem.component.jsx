import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class QuestsItem extends Component {
  render() {
    return (
      <div className="ada-row">
        <div className="ada-col-md-10">
          <div className="quest__title">
            <Link to={`/quests/${this.props.activeQuest._id}`}>{this.props.activeQuest.title}</Link>
          </div>
        </div>
        <div className="ada-col-md-2">
          <div>
            {this.props.activeQuest.score}
          </div>
        </div>
      </div>
    );
  }
}

QuestsItem.propTypes = {
  activeQuest: PropTypes.object.isRequired
};

export default QuestsItem;
