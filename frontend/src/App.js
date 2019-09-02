import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/home.component';
import Recipe from './components/pages/recipe/recipe.component';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Home} />
          <Route path="/recipes/:slug" component={Recipe} />
        </div>

        <div className='container'>
        </div>
      </Router>
    );
  }
}
