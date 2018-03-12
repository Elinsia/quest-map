import { connect } from 'react-redux';
import QuestsItem from './Login.component';
import { requestLogin } from './Auth.actions';

const mapDispatchToProps = dispatch => ({
  onLoginClick: (creds) => {
    dispatch(requestLogin(creds));
  }
});

export default connect(null, mapDispatchToProps)(QuestsItem);
