import { connect } from 'react-redux';
import Markers from './Markers.component';
import { showActiveQuests } from '../../../actions/questsActions';

const mapStateToProps = state => ({
  map: state.map.initMap.map,
  quests: state.quests.showAllQuests.quests
});

const mapDispatchToProps = dispatch => ({
  showActiveQuests: () => {
    dispatch(showActiveQuests());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Markers);
