import { connect } from 'react-redux';
import Wrap from './Wrap.component';

// import { openMenu } from '../../actions/menuActions';

const mapStateToProps = state => ({
  openMenu: state.menu
});

export default connect(mapStateToProps, null)(Wrap);
