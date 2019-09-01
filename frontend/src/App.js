import React, { Component } from 'react';
import imageHero from './images/hero.png';
import RecipeList from './components/recipe/list/list.component';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <div className='hero'>
          <img src={imageHero}/>
        </div>
        <div className='tagline'>
          <RecipeList />
        </div>
      </div>
    );
  }
}
