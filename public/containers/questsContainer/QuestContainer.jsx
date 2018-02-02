import { connect } from 'react-redux';
import QuestList from '../../components/quests/QuestList';
import { setVisibilityFilter, VisibilityFilters } from '../../actions/questsActions';

const mapDispatchToProps = dispatch => ({
  fetchQuests: () => {
    dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
  }
});

export default connect(null, mapDispatchToProps)(QuestList);
