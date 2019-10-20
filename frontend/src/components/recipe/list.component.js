/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';


export default class RecipeList extends Component {
  state = { recipes: [] };

  componentDidMount() {
    return fetch('https://qxj2a7tfel.execute-api.us-east-1.amazonaws.com/dev/recipes')
      .then((response => response.json()))
      .then(data => this.setState({ recipes: data }))
      .catch(console.log);
  }

  render() {
    const recipes = this.state.recipes || [];

    return (
      <ul>
        {
          recipes.map((recipe, key) => {
            let src = '../../images/recipes/placeholder.jpg';

            if (recipe.Slug === 'blueberry-oats') {
              src = `../../images/recipes/${recipe.Slug}.jpg`;
            }

            return (
              <li key={key}>
                <img src={src} /><Link to={`/recipes/${recipe.Slug}`}>{recipe.Title}</Link>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
