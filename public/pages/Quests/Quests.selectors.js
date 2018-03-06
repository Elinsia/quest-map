export const getVisibleQuests = (quests, filter) => { // eslint-disable-line import/prefer-default-export
  switch (filter) {
    case 'SHOW_ALL':
      return quests;
    case 'SHOW_ACTIVE': {
      return (quests || []).filter(q => q.active && !q.complete);
    }
    case 'SHOW_COMPLETED':
      return (quests || []).filter(q => q.complete);
    default:
      return filter;
  }
};
