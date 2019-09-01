import React, { Component } from 'react';
import RecipeDetail from '../detail/detail.component';


export default class RecipeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
    };
  }

  componentDidMount() {
    return fetch('https://qxj2a7tfel.execute-api.us-east-1.amazonaws.com/dev/recipes')
      .then((response => response.json()))
      .then((data) => {
        return this.setState({ recipes: data });
      })
      .catch(console.log);
  }

  render() {
    const recipes = this.state.recipes || [];
    console.log(this.state);

    return (
      <ul>
        { recipes.map((recipe, key) => <RecipeDetail key={key} title={recipe.Title} />) }
      </ul>
    );
  }
}
