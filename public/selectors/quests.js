const getVisibleQuests = (quests, filter) => {
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

export { getVisibleQuests as default };
