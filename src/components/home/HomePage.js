import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React Redux</h1>
        <p>React, redux, router, test, ES6 practice</p>
        <Link to="about" className="btn btn-primary btn-lag">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
