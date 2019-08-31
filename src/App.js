import React, { Component } from 'react';
import imageHero from './images/hero.png';


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
          Resume Site
        </div>
      </div>
    );
  }
}
