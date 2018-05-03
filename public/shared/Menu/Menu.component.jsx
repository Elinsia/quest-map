import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CrossIcon from '../Icons/CrossIcon';

class Menu extends Component {
  render() {
    return (
      <div className={`ada-menu ${this.props.openMenu ? 'open-sidebar' : ''}`}>
        <div className="ada-menu__header">
          <span
            onClick={this.props.hideMenu}
            onKeyUp={this.handleKeyUp}
            role="button"
            tabIndex={0}
            className="btn-icon"
          >
            <CrossIcon iconClass="ada-menu__header--cross" />
          </span>
        </div>
        <ul className="ada-menu__container">
          <li className="ada-menu__item">
            <Link className="ada-menu__text" to="/profile">Profile</Link>
          </li>
          <li className="ada-menu__item">
            <Link className="ada-menu__text" to="/map">Map</Link>
          </li>
          <li className="ada-menu__item">
            <Link className="ada-menu__text" to="/quests">Quests</Link>
          </li>
          <li className="ada-menu__item">
            <Link className="ada-menu__text" to="/achievements">Achievements</Link>
          </li>
          <li className="ada-menu__item">
            <Link className="ada-menu__text" to="/rating">Rating</Link>
          </li>
        </ul>
      </div>
    );
  }
}


Menu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  hideMenu: PropTypes.func.isRequired
};
export default Menu;
