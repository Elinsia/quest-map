import {SET_VISIBILITY_FILTER, TOGGLE_QUEST, VisibilityFilters} from "../actions/questsActions";

const {SHOW_ALL} = VisibilityFilters;

export default function(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    quests: quests(state.quests, action)
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function quests(state = [], action) {
  switch (action.type) {
    case	TOGGLE_QUEST:
      return	state.map((quest,	index)	=>	{
        if	(index	===	action.index)	{
          return	Object.assign({},	quest,	{
            completed:	!quest.completed
          })
        }
        return quest;
      });
    default:
      return state;
  }
}