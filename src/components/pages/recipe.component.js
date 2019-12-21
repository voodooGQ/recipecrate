import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetail from '../recipe/detail.component';

export default class RecipePage extends React.Component {
  static propTypes = {
    match: PropTypes.object,
  }

  render() {
    const { params } = this.props.match;
    return (
      <RecipeDetail slug={params.slug} />
    );
  }
}
