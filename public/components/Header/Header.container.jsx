import { connect } from 'react-redux';
import Header from './Header.component';

import { openMenu } from '../../actions/menu';

const mapStateToProps = state => ({
  openMenu: state.menu
});

const mapDispatchToProps = dispatch => ({
  showMenu: () => {
    dispatch(openMenu());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
