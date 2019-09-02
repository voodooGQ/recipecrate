import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class IngredientsList extends Component {
  static propTypes = {
    ingredients: PropTypes.array.isRequired,
  }

  render() {
    return (
      <ul className="recipe-ingredients-list">
        { this.props.ingredients.map((ingredient, key) => (<li key={key}>{ingredient}</li>)) }
      </ul>
    );
  }
}
