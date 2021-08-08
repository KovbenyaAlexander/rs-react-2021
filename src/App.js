import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import Navigation from './Components/Header/Navigation/Navigation';
import Page404 from './Components/Page404/Page404';
import DetailsPage from './Components/DetailsPage/DetailsPage';

const App = () => (
  <div className="App">
    <Navigation />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} exact />
      <Route
        path="/details/:cardID"
        render={({ match }) => {
          const { cardID } = match.params;
          return <DetailsPage cardID={cardID} />;
        }}
      />
      <Route component={Page404} />
    </Switch>
  </div>
);

export default App;
