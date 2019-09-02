import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './list.component';

export default class IngredientsSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="recipe-ingredients-section">
        <h3 className="recipe-ingredients-section-title">{ this.props.title }</h3>
        <IngredientsList ingredients={ this.props.ingredients }></IngredientsList>
      </div>
    );
  }
}
