import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isAuth } from '../../services/authManager';

class Rating extends Component {
  componentDidMount() {
    this.props.requestRating();

    if (isAuth()) {
      this.props.requestCurrPlace();
    }
  }

  render() {
    return (
      <div className="ada-row">
        <div className="ada-col-md-6">
          {!isAuth() ? <p className="tips">Войдите, чтобы определить ваше текущее место.</p> :
          <div>
            {!this.props.currPlace ? <p className="tips">Загрузка текущего места...</p> :
            <div className="rating">
              <div className="rating--row">
                <div className="rating__title--curr">Имя: </div>
                <div className="rating__value--curr">{this.props.currPlace.firstName}</div>
              </div>
              <div className="rating--row">
                <div className="rating__title--curr">Текущее место: </div>
                <div className="rating__value--curr data--score">{this.props.currPlace.place}</div>
              </div>
            </div>
            }
          </div>
          }
        </div>
        <div className="ada-col-md-6">
          {!this.props.rating ? <p className="tips">Загрузка рейтинга...</p> :
          <div className="table">
            <div className="table__header">
              <div className="table__item">Место</div>
              <div className="table__item">Логин</div>
              <div className="table__item">Имя</div>
              <div className="table__item">Очки</div>
            </div>
            <div className="table__body">
              {this.props.rating.map(user => (
                <div className="table__body--row" key={user.id}>
                  <div className="table__data">{user.place}</div>
                  <div className="table__data">{user.username}</div>
                  <div className="table__data">{user.firstName}</div>
                  <div className="table__data data--score">{user.score}</div>
                </div>
              ))}
            </div>
          </div>
          }
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  requestRating: PropTypes.func.isRequired,
  requestCurrPlace: PropTypes.func.isRequired,
  currPlace: PropTypes.object,
  rating: PropTypes.array
};
Rating.defaultProps = {
  currPlace: {},
  rating: []
};

export default Rating;
