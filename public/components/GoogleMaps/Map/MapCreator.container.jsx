import { connect } from 'react-redux';
import MapCreator from './MapCreator.component';
import { initMap } from '../../../actions/mapActions';

const mapDispatchToProps = dispatch => ({
  initMap: (payload) => {
    dispatch(initMap(payload));
  }
});

export default connect(null, mapDispatchToProps)(MapCreator);
