import { connect } from 'react-redux';
import AccordionQuestList from '../../components/quests/AccordionQuestList';
import { DisplayFilter, VisibilityFilters } from '../../constants/actionTypes';
import { setDisplayFilter, setVisibilityFilter } from '../../actions/questsActions';

const mapDispatchToProps = dispatch => ({
  fetchQuests: () => {
    dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
    dispatch(setDisplayFilter(DisplayFilter.HIDE));
  }
});

export default connect(null, mapDispatchToProps)(AccordionQuestList);
