import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DirectionsList extends Component {
  static propTypes = {
    directions: PropTypes.array.isRequired,
  }

  render() {
    return (
      <ol className="recipe-directions-list">
        { this.props.directions.map((direction, key) => (<li key={key}>{direction}</li>)) }
      </ol>
    );
  }
}
