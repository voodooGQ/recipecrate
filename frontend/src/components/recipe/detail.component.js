import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import fetch from 'isomorphic-fetch';
import IngredientsSection from './ingredients/section.component';

export default class RecipeDetail extends Component {
  state = { recipe: {} };

  static propTypes = {
    history: PropTypes.object,
    slug: PropTypes.string.isRequired,
    recipe: PropTypes.object,
  }

  componentDidMount() {
    if (!isEmpty(this.props.recipe)) { return this.setState({ recipe: this.state.recipe }); }
    return fetch(`https://qxj2a7tfel.execute-api.us-east-1.amazonaws.com/dev/recipes/${this.props.slug}`)
      .then((response => response.json()))
      .then(data => this.setState({ recipe: (!isEmpty(data) ? data[0] : {}) }))
      .catch(console.log);
  }

  render() {
    const ingredients = this.state.recipe.Ingredients || {};

    return (
      <div className="recipe-container">
        <span>{this.state.recipe.Title}</span>
        {
          // eslint-disable-next-line max-len
          Object.keys(ingredients).map(key => <IngredientsSection key={key} title={key} ingredients={ingredients[key]}></IngredientsSection>)
        }
        <div className="recipe-directions">{ this.state.recipe.Directions || '' } </div>
      </div>
    );
  }
}
