import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuestsItem extends Component {
  render() {
    return (
      <div>
        {this.props.activeQuest.title}
      </div>
    );
  }
}

QuestsItem.propTypes = {
  activeQuest: PropTypes.object.isRequired
};

export default QuestsItem;
