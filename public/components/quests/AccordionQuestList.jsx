import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuestList from './AccordionQuestItem';

const quests = [
  {
    id: '1',
    city: 'Odessa',
    title: 'One',
    points: '100'
  },
  {
    id: '2',
    city: 'Lvov',
    title: 'Two',
    points: '200'
  },
  {
    id: '3',
    city: 'Kiev',
    title: 'Tree',
    points: '300'
  },
  {
    id: '4',
    city: 'Kharkiv',
    title: 'Four',
    points: '400'
  }
];

class AccordionQuests extends Component {
  componentWillMount() {
    this.props.fetchQuests();
  }

  render() {
    return (
      <div className="ada-panel">
        {quests.map(quest => (
          <QuestList
            key={quest.id}
            quests={quest}
          />
          ))}
      </div>
    );
  }
}

AccordionQuests.propTypes = {
  // quests: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   title: PropTypes.string.isRequired,
  //   points: PropTypes.number.isRequired
  // }).isRequired).isRequired,
  fetchQuests: PropTypes.func.isRequired
};

export default AccordionQuests;
