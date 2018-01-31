import React from 'react';
import PropTypes from 'prop-types';

const QuestItem = ({quests}) => {
  return (
    <li>
      {quests.name} {quests.points}
    </li>
  )
};

export default QuestItem;