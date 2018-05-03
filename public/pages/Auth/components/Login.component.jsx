import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CrossIcon from 'Public/shared/Icons/CrossIcon';

class Login extends Component {
  handleClick() {
    const username = this.username;
    const password = this.password;
    const creds = { username: username.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds);
  }

  render() {
    return (
      <div className="ada-modal">
        <div className="ada-modal__dialog">
          <div className="ada-modal__content">
            <div className="ada-form__header">
              <h2 className="ada-title">Авторизация</h2>
              <Link className="ada-menu__header--cross icon-close" to="/">
                <CrossIcon />
              </Link>
            </div>
            <div className="ada-form-control">
              <label className="ada-form-control__label" htmlFor="username">Логин</label>
              <input
                className="ada-form-control__input"
                type="text"
                placeholder="Логин"
                id="username"
                ref={(username) => { this.username = username; }}
              />
            </div>
            <div className="ada-form-control">
              <label className="ada-form-control__label" htmlFor="password">Пароль</label>
              <input
                className="ada-form-control__input"
                type="password"
                placeholder="Пароль"
                id="password"
                ref={(password) => { this.password = password; }}
              />
            </div>
            <div>
              <button className="ada-btn ada-btn--fill" onClick={() => this.handleClick()}>Войти</button>
            </div>
            <div className="ada-form__footer">
              <Link className="header--auth" to="/signup">У вас ещё нет учётной записи?</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired
};

export default Login;
