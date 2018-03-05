import { connect } from 'react-redux';
import QuestsList from './QuestsList.component';
import { setVisibilityFilter, showQuests } from '../../../actions/quests';
import getVisibleQuests from '../../../selectors/quests';
import { VisibilityFilters } from '../../../constants/actionTypes';

const mapStateToProps = (state, props) => ({
  questsActiveList: getVisibleQuests(state.quests.citiesQuests[props.cityId], state.quests.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  showQuests: () => {
    dispatch(showQuests());
    dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestsList);
