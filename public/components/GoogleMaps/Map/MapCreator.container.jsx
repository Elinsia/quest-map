import { connect } from 'react-redux';
import MapCreator from './MapCreator.component';
import initMap from '../../../actions/map';

const mapDispatchToProps = dispatch => ({
  initMap: (payload) => {
    dispatch(initMap(payload));
  }
});

export default connect(null, mapDispatchToProps)(MapCreator);
