import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IngredientsList from '../list/list.component';

export default class IngredientsSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
  }

  render() {
    return (
      <div className="recipe-ingredients-section">
        <h1>{ this.props.title }</h1>
        <IngredientsList ingredients={ this.props.ingredients }></IngredientsList>
      </div>
    );
  }
}
