import { connect } from 'react-redux';
import CitiesList from './CitiesList.component';
import showActiveCities from '../../../actions/cities';

const mapStateToProps = state => ({
  citiesActiveList: state.cities.activeCities
});

const mapDispatchToProps = dispatch => ({
  showActiveCities: () => {
    dispatch(showActiveCities());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
