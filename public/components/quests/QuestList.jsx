import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QuestList extends Component {
  render() {
    return (
      <div className={this.props.className}>
        text
      </div>
    );
  }
}

QuestList.propTypes = {
  className: PropTypes.string.isRequired
};

export default QuestList;
