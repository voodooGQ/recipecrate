import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetail from '../../recipe/detail/detail.component';

export default class Recipe extends React.Component {
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
