import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Users extends Component {
  constructor() {
    super();

    this.state = {
      pass: false,
      firstName: false
    };

    this.toggleChangePass = this.toggleChangePass.bind(this);
    this.toggleChangeName = this.toggleChangeName.bind(this);
    this.handleClickPass = this.handleClickPass.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
  }

  componentWillMount() {
    this.props.requestMeFromToken();
  }

  toggleChangePass() {
    this.setState(prevState => ({
      pass: !prevState.pass
    }));
  }

  toggleChangeName() {
    this.setState(prevState => ({
      firstName: !prevState.firstName
    }));
  }

  handleClickPass() {
    const password = this.password;
    const creds = { password: password.value.trim() };

    this.props.onChangeClick(this.props.meFromToken.id, creds);
  }

  handleClickName() {
    const firstName = this.firstName;
    const creds = { firstName: firstName.value.trim() };

    this.props.onChangeClick(this.props.meFromToken.id, creds);
  }

  render() {
    return (
      <div>
        <div>
          FirstName: {this.props.meFromToken.firstName}
        </div>
        <div>

          Login: {this.props.meFromToken.login}
        </div>
        <div
          onClick={this.toggleChangePass}
          onKeyPress={this.toggleChangePass}
          role="button"
          tabIndex="0"
        >
          Изменить пароль
        </div>
        <div className={`${this.state.pass ? 'open' : 'hide'}`}>
          <input
            className="ada-form-control__input"
            type="password"
            placeholder="Пароль"
            ref={(password) => { this.password = password; }}
          />
          <button onClick={this.handleClickPass}>Изменить</button>
        </div>
        <div
          onClick={this.toggleChangeName}
          onKeyPress={this.toggleChangeName}
          role="button"
          tabIndex="0"
        >
          Изменить имя
        </div>
        <div className={`${this.state.firstName ? 'open' : 'hide'}`}>
          <input
            className="ada-form-control__input"
            type="text"
            placeholder="Имя"
            ref={(firstName) => { this.firstName = firstName; }}
          />
          <button onClick={this.handleClickName}>Изменить</button>
        </div>
      </div>
    );
  }
}

// meFromToken init string, but must object

Users.propTypes = {
  requestMeFromToken: PropTypes.func.isRequired,
  meFromToken: PropTypes.object,
  firstName: PropTypes.string,
  login: PropTypes.string,
  onChangeClick: PropTypes.func.isRequired
};
Users.defaultProps = {
  meFromToken: {},
  firstName: '',
  login: ''
};

export default Users;
