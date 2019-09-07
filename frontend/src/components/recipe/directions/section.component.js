import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DirectionsList from './list.component';

export default class DirectionsSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    directions: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="recipe-ingredients-section">
        <h3 className="recipe-ingredients-section-title">{ this.props.title }</h3>
        <DirectionsList directions={ this.props.directions }></DirectionsList>
      </div>
    );
  }
}
