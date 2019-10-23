import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/pages/home.component';
import RecipePage from './components/pages/recipe.component';
import { createBrowserHistory } from 'history';

import './styles/app.scss';

const history = createBrowserHistory();
const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) { history.replace(path); }

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="container site-container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/recipes" component={HomePage} />
          <Route path="/recipes/:slug" component={RecipePage} />
        </div>
      </Router>
    );
  }
}
