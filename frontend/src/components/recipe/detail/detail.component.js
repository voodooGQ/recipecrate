import React from 'react';
import PropTypes from 'prop-types';

export default class RecipeList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return <li>{this.props.title}</li>;
  }
}
