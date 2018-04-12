import { connect } from 'react-redux';
import { showQuests } from 'Public/pages/Quests/Quests.actions';
import Markers from './Markers.component';

const mapStateToProps = state => ({
  map: state.map.initMap.map,
  quests: state.quests.showActiveQuests
});

const mapDispatchToProps = dispatch => ({
  showActiveQuests: () => {
    dispatch(showQuests());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Markers);
