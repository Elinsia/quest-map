import { connect } from 'react-redux';
import CitiesList from './CitiesList.component';
import { showActiveCities } from '../../actions/citiesActions';

const mapStateToProps = state => ({
  citiesActiveList: state.cities.showActiveCities
});

const mapDispatchToProps = dispatch => ({
  showActiveCities: () => {
    dispatch(showActiveCities());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
