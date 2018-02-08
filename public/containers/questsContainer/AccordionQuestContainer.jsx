import { connect } from 'react-redux';
import AccordionQuestList from '../../components/quests/AccordionQuestList';
import { DisplayFilter, setDisplayFilter, setVisibilityFilter, VisibilityFilters } from '../../actions/questsActions';

const mapDispatchToProps = dispatch => ({
  fetchQuests: () => {
    dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
    dispatch(setDisplayFilter(DisplayFilter.HIDE));
  }
});

export default connect(null, mapDispatchToProps)(AccordionQuestList);
