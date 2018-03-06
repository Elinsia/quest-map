import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestsItem from './QuestsItem.container';

class QuestsList extends Component {
  componentWillMount() {
    this.props.showQuests();
  }

  render() {
    const activeQuests = this.props.questsActiveList;

    if (!activeQuests) {
      return null;
    }

    return (
      <div className={this.props.className}>
        {activeQuests.map(quest => (
          <QuestsItem
            key={quest._id}
            activeQuest={quest}
          />
        ))}
      </div>
    );
  }
}

QuestsList.propTypes = {
  className: PropTypes.string.isRequired,
  showQuests: PropTypes.func.isRequired,
  questsActiveList: PropTypes.array
};

QuestsList.defaultProps = {
  questsActiveList: []
};

export default QuestsList;
