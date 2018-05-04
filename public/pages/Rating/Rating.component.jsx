import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  componentWillMount() {
    this.props.requestRating();
  }

  render() {
    return (
      <div>
        {!this.props.rating ? <p>Loading...</p> :
        <ul>
          Rating
          {this.props.rating.map(user => (
            <li key={user.id}>
              {user.place} {user.username} {user.firstName} {user.score}
            </li>
          ))}
        </ul>
        }
      </div>
    );
  }
}

Rating.propTypes = {
  requestRating: PropTypes.func.isRequired,
  rating: PropTypes.array
};
Rating.defaultProps = {
  rating: []
};

export default Rating;
