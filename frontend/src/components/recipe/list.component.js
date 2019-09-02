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
        { recipes.map((recipe, key) => <li key={key}><Link to={`/recipes/${recipe.Slug}`}>{recipe.Title}</Link></li>) }
      </ul>
    );
  }
}
