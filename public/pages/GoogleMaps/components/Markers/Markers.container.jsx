import { connect } from 'react-redux';
import Markers from './Markers.component';
import { showQuests } from '../../../Quests/Quests.actions';

const mapStateToProps = state => ({
  map: state.map.initMap.map,
  quests: state.quests.mapQuests.quests
});

const mapDispatchToProps = dispatch => ({
  showActiveQuests: () => {
    dispatch(showQuests());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Markers);
