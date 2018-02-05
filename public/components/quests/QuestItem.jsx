import React from 'react';
import PropTypes from 'prop-types';
import OpenIcon from '../Icons/OpenIcon';

const QuestItem = ({ quests }) => (
  <li className="ada-panel__item">
    <div className="ada-panel__header">
      <div className="ada-panel__text">{quests.city}</div>
      <OpenIcon />
    </div>
  </li>
);

QuestItem.propTypes = {
  quests: PropTypes.object.isRequired
};

export default QuestItem;
