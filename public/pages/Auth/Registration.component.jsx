import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CrossIcon from '../../shared/Icons/CrossIcon';

class Registration extends Component {
  handleClick() {
    const login = this.login;
    const password = this.password;
    const firstName = this.firstName;
    const creds = { login: login.value.trim(), password: password.value.trim(), firstName: firstName.value.trim() };
    this.props.onRegistrationClick(creds);
  }

  render() {
    return (
      <div className="ada-modal">
        <div className="ada-modal__dialog">
          <div className="ada-modal__content">
            <div className="ada-form__header">
              <h2 className="ada-title">Регистрация</h2>
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
            <div className="ada-form-control">
              <label className="ada-form-control__label" htmlFor="firstName">Имя</label>
              <input
                className="ada-form-control__input"
                type="text"
                placeholder="Имя"
                id="firstName"
                ref={(firstName) => { this.firstName = firstName; }}
              />
            </div>
            <div className="ada-form__footer">
              <div className="ada-row">
                <div className="ada-col-md-6">
                  <button className="ada-btn ada-btn--blank" onClick={() => this.handleClick()}>
                    Регистрация
                  </button>
                </div>
                <div className="ada-col-md-6">
                  Есть аккаунт?
                  <Link className="header--auth" to="/signin"> Авторизация</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  onRegistrationClick: PropTypes.func.isRequired
};

export default Registration;
