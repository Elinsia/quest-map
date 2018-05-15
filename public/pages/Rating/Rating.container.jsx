import { connect } from 'react-redux';
import { requestRating, requestCurrPlace } from './Rating.actions';
import Rating from './Rating.component';

const mapStateToProps = state => ({
  rating: state.rating.rating.data,
  currPlace: state.rating.currPlace.data
});

const mapDispatchToProps = dispatch => ({
  requestRating: () => {
    dispatch(requestRating());
  },
  requestCurrPlace: () => {
    dispatch(requestCurrPlace());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
