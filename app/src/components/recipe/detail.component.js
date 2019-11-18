import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import './detail.scss';
import placeholderImg from './images/placeholder.jpg';

export default class RecipeDetail extends Component {
  state = {
    image: '',
    recipe: {},
  };

  static propTypes = {
    history: PropTypes.object,
    slug: PropTypes.string.isRequired,
    recipe: PropTypes.object,
  }

  async componentDidMount() {
    await this.loadImage(this.props.slug);
    await this.loadRecipeData(this.props.slug);
  }

  loadImage = async recipeSlug => {
    await import(`./images/${recipeSlug}.png`).then(image => {
      this.setState({ image: image.default })
    }).catch(err => this.setState({ image: placeholderImg}));
  };

  loadRecipeData = async recipeSlug => {
    await import(`./data/recipes/${recipeSlug}.md`).then(async imp => {
      await fetch(imp.default).then(async (response) => {
        this.setState({
          recipe: await response.text()
        })
      })
    }).catch(err => this.setState({ recipe: '' }));
  }

  render() {
    const { image, recipe } = this.state;

    return (
      <div className="recipe-container">
        <div class="row image-container vr">
          <div class="columns 12">
            {image && <img src={image} alt={this.props.slug} />}
          </div>
        </div>
        <div class="row">
          <div class="columns 12">
            {recipe && <ReactMarkdown source={recipe} />}
          </div>
        </div>
      </div>
    );
  }
}
