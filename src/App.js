import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './Components/HomePage/HomePage';
import AboutPage from './Components/AboutPage/AboutPage';
import Navigation from './Components/Header/Navigation/Navigation';
import Page404 from './Components/Page404/Page404';
import DetailsPage from './Components/DetailsPage/DetailsPage';

const App = () => (
  <div className="App">
    <Navigation />
    <TransitionGroup>
      <Switch>
        <Route key="/" exact path="/">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <HomePage />
              </div>
            </CSSTransition>
          )}
        </Route>
        <Route key="/about" exact path="/about">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <AboutPage />
              </div>
            </CSSTransition>
          )}
        </Route>
        <Route
          path="/details/:cardID"
          render={({ match }) => {
            const { cardID } = match.params;
            return <DetailsPage cardID={cardID} />;
          }}
        />
        <Route component={Page404} />
      </Switch>
    </TransitionGroup>
  </div>
);

export default App;
