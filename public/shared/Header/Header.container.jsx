import { connect } from 'react-redux';
import Header from './Header.component';
import { openMenu } from '../Menu/Menu.actions';
import { receiveLogout, requestLogout } from '../../pages/Auth/Auth.actions';

const mapStateToProps = state => ({
  openMenu: state.menu,
  isAuthenticated: state.auth.auth.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  showMenu: () => {
    dispatch(openMenu());
  },
  onLogoutClick: () => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    dispatch(receiveLogout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
