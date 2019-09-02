import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/home/home.component';

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
        </div>

        <div className='container'>
        </div>
      </Router>
    );
  }
}
