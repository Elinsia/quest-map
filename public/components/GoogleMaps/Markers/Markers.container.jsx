import { connect } from 'react-redux';
import Markers from './Markers.component';
import { showActiveQuests } from '../../../actions/quests';

const mapStateToProps = state => ({
  map: state.map.initMap.map,
  quests: state.quests.showActiveQuests
});

const mapDispatchToProps = dispatch => ({
  showActiveQuests: () => {
    dispatch(showActiveQuests());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Markers);
