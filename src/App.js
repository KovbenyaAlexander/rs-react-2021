import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import HomePage from './Components/Pages/HomePage/HomePage';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import Header from './Components/Header/Header';
import Page404 from './Components/Pages/Page404/Page404';
import DetailsPage from './Components/Pages/DetailsPage/DetailsPage';
import getAllCharacters from './redux/actions/thunk/getAllCharacters';
import { setDetailsId } from './redux/actions/actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  return (
    <div className="App" data-testid="App">
      <Header />
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
                  <HomePage data-testid="HomePage" />
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
              dispatch(setDetailsId(cardID));
              return <DetailsPage />;
            }}
          />
          <Route component={Page404} />
        </Switch>
      </TransitionGroup>
    </div>
  );
};

export default App;
