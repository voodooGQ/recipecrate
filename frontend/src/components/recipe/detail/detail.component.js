import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

export default class RecipeDetail extends React.Component {
  state = { recipe: {} };

  static propTypes = {
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
    return (
      <div className="recipe-container">
        <span>{this.state.recipe.Title}</span>
      </div>
    );
  }
}
