import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import fetch from 'isomorphic-fetch';
import IngredientsSection from './ingredients/section.component';
import DirectionsSection from './directions/section.component';
import './detail.scss';


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
    const directions = this.state.recipe.Directions || {};

    return (
      <div className="recipe-container">
        <h1>{this.state.recipe.Title}</h1>
        {
          // eslint-disable-next-line max-len
          Object.keys(ingredients).map(key => <IngredientsSection key={key} title={key} ingredients={ingredients[key]}></IngredientsSection>)
        }
        {
          // eslint-disable-next-line max-len
          Object.keys(directions).map(key => <DirectionsSection key={key} title={key} directions={directions[key]}></DirectionsSection>)
        }
      </div>
    );
  }
}
