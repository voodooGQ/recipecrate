import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IngredientsSection extends Component {
  state = { ingredients: null }

  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
  }

  render() {
    console.log('In Component');
    return (
      <div className="recipe-ingredients-section">
        <h1>{ this.props.title }</h1>
      </div>
    );
  }
}
