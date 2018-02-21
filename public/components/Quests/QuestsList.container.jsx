import { connect } from 'react-redux';
import QuestsList from './QuestsList.component';
import { showActiveQuests } from '../../actions/questsActions';

const mapStateToProps = (state, props) => ({
  questsActiveList: state.quests.activeQuests[props.cityId]
});

const mapDispatchToProps = dispatch => ({
  showActiveQuests: () => {
    dispatch(showActiveQuests());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestsList);
