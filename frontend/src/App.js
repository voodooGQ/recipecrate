import React, { Component } from 'react';
import { BrowserRouter as Router, Route, BrowserHistory } from 'react-router-dom';
import HomePage from './components/pages/home.component';
import RecipePage from './components/pages/recipe.component';

import './styles/normalize.scss';
import './styles/skeleton.scss';
import './styles/app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router history={BrowserHistory}>
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/recipes" component={HomePage} />
          <Route path="/recipes/:slug" component={RecipePage} />
        </div>
      </Router>
    );
  }
}
