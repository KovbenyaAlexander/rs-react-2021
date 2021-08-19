/**
 * @jest-environment jsdom
 */

import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import SearchForm from './Components/Pages/HomePage/Components/SearchForm/SearchForm';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import { createStore, applyMiddleware } from 'redux';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import getPageNumbers from './Components/Pages/HomePage/Components/Pagination/PaginationService';
import { createMemoryHistory } from 'history';
import { Link, Route, Router, Switch, useParams } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
global.fetch = require('node-fetch'); // shouldn't it be used?

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

const renderWithRouter = (
  component,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(component, { wrapper: Wrapper }),
    history,
  };
};

describe('Home page', () => {
  it('pagination generation testing', () => {
    expect(getPageNumbers(47, 10, 1)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});

describe('React Router', () => {
  it('should navigate to error page if route is wrong', () => {
    const history = createMemoryHistory();
    history.push('/wrong-route');
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );
    expect(container.innerHTML).toMatch('Error 404. Page not found.');
  });
});

/*
describe('React Router', () => {
  it('should navigate to error page if route is wrong', () => {
    const { container } = renderWithRouter(<App />, {
      route: '/wrong-route',
    });
    expect(container.innerHTML).toMatch('Error 404. Page not found.');
  });
});

*/

/*
All files                                                             |    18.8 |        0 |       0 |   20.09 | //init
All files                                                             |   21.18 |     1.87 |    3.13 |   22.27 | //pagination generation
All files                                                             |    29.2 |     4.67 |   11.58 |   30.34 | //404 testing
*/

/*

describe('React Router', () => {
  it('should render the home page', () => {

    
    const { container, getByTestId } = renderWithRouter(<App />);
    const page = screen.getByTestId('HomePage');
    expect(page).toBeInTheDocument();



});


*/

// describe('Redux testing', () => {
//   it('test', () => {
//     const { getByRole } = renderWithRedux(<SearchForm />);
//     expect(getByRole('heading')).toHaveTextContent(
//       'Serach characters by name:',
//     );
//   });
// });
