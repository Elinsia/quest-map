import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BurgerIcon from '../Icons/BurgerIcon';

class Header extends Component {
  render() {
    return (
      <div className="ada-header">
        <span
          onClick={this.props.showMenu}
          onKeyUp={this.handleKeyUp}
          role="button"
          tabIndex={0}
        >
          <BurgerIcon />
        </span>
      </div>
    );
  }
}

Header.propTypes = {
  showMenu: PropTypes.func.isRequired
};
export default Header;
