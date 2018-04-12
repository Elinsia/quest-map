import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CrossIcon from 'Public/shared/Icons/CrossIcon';

class Login extends Component {
  handleClick() {
    const login = this.login;
    const password = this.password;
    const creds = { login: login.value.trim(), password: password.value.trim() };
    this.props.onLoginClick(creds);
  }

  render() {
    return (
      <div className="ada-modal">
        <div className="ada-modal__dialog">
          <div className="ada-modal__content">
            <div className="ada-form__header">
              <h2 className="ada-title">Авторизация</h2>
              <Link className="icon-close" to="/">
                <CrossIcon />
              </Link>
            </div>
            <div className="ada-form-control">
              <label className="ada-form-control__label" htmlFor="login">Логин</label>
              <input
                className="ada-form-control__input"
                type="text"
                placeholder="Логин"
                id="login"
                ref={(login) => { this.login = login; }}
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
            <div className="ada-form__footer">
              <div className="ada-row">
                <div className="ada-col-md-6">
                  <button className="ada-btn ada-btn--blank" onClick={() => this.handleClick()}>Войти</button>
                </div>
                <div className="ada-col-md-6">
                  Нет аккаунта?
                  <Link className="header--auth" to="/signup"> Регистрация</Link>
                </div>
              </div>
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
