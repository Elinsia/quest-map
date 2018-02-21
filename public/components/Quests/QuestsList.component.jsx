import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestsItem from './QuestsItem.component';

class QuestsList extends Component {
  componentWillMount() {
    this.props.showActiveQuests();
  }

  render() {
    const activeQuests = this.props.questsActiveList;

    if (!activeQuests) {
      return null;
    }

    return (
      <div className={this.props.className}>
        {activeQuests.map((quest) => (
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
  showActiveQuests: PropTypes.func.isRequired,
  questsActiveList: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    point: PropTypes.object.isRequired,
    shortDescription: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    complete: PropTypes.bool.isRequired,
    city: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired
  }).isRequired).isRequired
};

export default QuestsList;
