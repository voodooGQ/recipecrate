import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import './detail.scss';

export default class RecipeDetail extends Component {
  state = {  };

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
    });
  };

  loadRecipeData = async recipeSlug => {
    await import(`./data/recipes/${recipeSlug}.md`).then(async imp => {
      await fetch(imp.default).then(async (response) => {
        this.setState({
          recipe: await response.text()
        })
      })
    });
  }

  render() {
    const { image, recipe } = this.state;

    return (
      <div className="recipe-container">
        {image && <img src={image} alt={this.props.slug} />}
        {recipe && <ReactMarkdown source={recipe} />}
      </div>
    );
  }
}
