import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RECIPE_DATA from './data/recipes.json';

export default class RecipeList extends Component {
  state = { recipes: RECIPE_DATA };

  render() {
    const { recipes } = this.state;

    return (
      <ul>
        {
          recipes.map((recipe, key) => {
            return (
              <li key={key}>
                <Link to={`/recipes/${recipe.Slug}`}>{recipe.Title}</Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
