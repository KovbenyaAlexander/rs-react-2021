import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import Navigation from './Components/Navigation/Navigation';
import Page404 from './Components/Page404/Page404';

const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} exact />
      <Route component={Page404} />
    </Switch>
  </div>
);

export default App;
