import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestItem from './QuestItem';

const quests = [
  {
    id: '1',
    title: 'One',
    points: '100'
  },
  {
    id: '2',
    title: 'Two',
    points: '200'
  },
  {
    id: '3',
    title: 'Tree',
    points: '300'
  },
  {
    id: '4',
    title: 'Four',
    points: '400'
  }
];

class QuestList extends Component {
  componentWillMount() {
    this.props.fetchQuests();
  }

  render() {
    return (
      <ul>
        {quests.map(quest => <QuestItem key={quest.id} quests={quest} />)}
      </ul>
    );
  }
}

QuestList.propTypes = {
  // quests: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   title: PropTypes.string.isRequired,
  //   points: PropTypes.number.isRequired
  // }).isRequired).isRequired,
  fetchQuests: PropTypes.func.isRequired
};

export default QuestList;
