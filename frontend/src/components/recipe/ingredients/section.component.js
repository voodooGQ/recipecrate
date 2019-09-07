import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IngredientsList from './list.component';

export default class IngredientsSection extends Component {
  static propTypes = {
    title: PropTypes.string,
    ingredients: PropTypes.array.isRequired,
  }

  render() {
    let title = '';
    if (this.props.title !== 'none') {
      title = (<h3 className="recipe-ingredients-section-title">{ this.props.title }</h3>);
    }

    return (
      <div className="recipe-ingredients-section">
        { title }
        <IngredientsList ingredients={ this.props.ingredients }></IngredientsList>
      </div>
    );
  }
}
