import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DirectionsList from './list.component';

export default class DirectionsSection extends Component {
  static propTypes = {
    title: PropTypes.string,
    directions: PropTypes.array.isRequired,
  }

  render() {
    let title = '';
    if (this.props.title !== 'none') {
      title = (<h3 className="recipe-directions-section-title">{ this.props.title }</h3>);
    }

    return (
      <div className="recipe-ingredients-section">
        { title }
        <DirectionsList directions={ this.props.directions }></DirectionsList>
      </div>
    );
  }
}
