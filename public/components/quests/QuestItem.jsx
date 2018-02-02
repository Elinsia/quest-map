import React from 'react';
import PropTypes from 'prop-types';

const QuestItem = ({ quests }) => (
  <li>
    {quests.title} {quests.points}
  </li>
);

QuestItem.propTypes = {
  quests: PropTypes.object.isRequired
};

export default QuestItem;
