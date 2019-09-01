import React from 'react';
import PropTypes from 'prop-types';

export default class RecipeList extends React.Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
  }

  render() {
    const recipe = this.props.recipe;
    return (
      <span>{recipe.Title}</span>
    );
  }
}
