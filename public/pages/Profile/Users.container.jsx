import { connect } from 'react-redux';
import { requestMeFromToken, requestUpdateUsers } from './Users.actions';
import Users from './Users.component';

const mapStateToProps = state => ({
  meFromToken: state.users.meFromToken.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestMeFromToken: () => {
    dispatch(requestMeFromToken());
  },
  onChangeClick: (id, creds) => {
    dispatch(requestUpdateUsers(id, creds));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
