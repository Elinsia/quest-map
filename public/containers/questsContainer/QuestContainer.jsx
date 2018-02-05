import { connect } from 'react-redux';
import QuestList from '../../components/quests/QuestList';
import { DisplayFilter, setDisplayFilter, setVisibilityFilter, VisibilityFilters } from '../../actions/questsActions';

const mapDispatchToProps = dispatch => ({
  fetchQuests: () => {
    dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
    dispatch(setDisplayFilter(DisplayFilter.HIDE));
  }
});

export default connect(null, mapDispatchToProps)(QuestList);
