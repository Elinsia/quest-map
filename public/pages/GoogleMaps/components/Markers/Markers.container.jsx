import { connect } from 'react-redux';
import { showQuests } from 'Public/pages/Quests/Quests.actions';
import { getMapQuests } from 'Public/pages/Quests/Quests.selectors';
import Markers from './Markers.component';

const mapStateToProps = state => ({
  map: state.map.initMap.map,
  quests: getMapQuests(state.quests.questsList)
});

const mapDispatchToProps = dispatch => ({
  showActiveQuests: () => {
    dispatch(showQuests());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Markers);
