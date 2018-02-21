import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const Routes = () => {
  return (
    <Router>
      <div>
        <h1> Movies</h1>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies" component={Movie} />
      </div>
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById('root'));
