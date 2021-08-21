/**
 * @jest-environment jsdom
 */

import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Link, Route, Router, Switch, useParams } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import getPageNumbers from './Components/Pages/HomePage/Components/Pagination/PaginationService';
import App from './App';
import reducer from './redux/reducer';
import SearchForm from './Components/Pages/HomePage/Components/SearchForm/SearchForm';
import AboutPage from './Components/Pages/AboutPage/AboutPage';
import HomePage from './Components/Pages/HomePage/HomePage';
import {
  setDetailsId,
  setDetailsInfo,
  setCardPerPageValue,
  setCharactersData,
  setSearchText,
  setLoadingStatus,
  setErrorStatus,
  setSortType,
  setNumberOfPage,
} from './redux/actions/actions';
import Pagination from './Components/Pages/HomePage/Components/Pagination/Pagination';
global.fetch = require('node-fetch'); // shouldn't it be used?

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// const renderWithRedux = (
//   component,
//   { initialState, store = createStore(reducer, initialState) } = {},
// ) => {
//   return {
//     ...render(<Provider store={store}>{component}</Provider>),
//     store,
//   };
// };

// const renderWithRouter = (
//   component,
//   {
//     route = '/',
//     history = createMemoryHistory({ initialEntries: [route] }),
//   } = {},
// ) => {
//   const Wrapper = ({ children }) => (
//     <Router history={history}>{children}</Router>
//   );
//   return {
//     ...render(component, { wrapper: Wrapper }),
//     history,
//   };
// };

const customRender = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(<Provider store={store}>{component}</Provider>, {
      wrapper: Wrapper,
    }),
    store,
    history,
  };
};

const initialState = {
  searchText: '',
  currentPage: 1,
  cardsPerPage: 20,
  sort: 'name:asc',
  charactersData: [],
  totalPages: 1,
  detailsID: '',
  detailsInfo: {},
  isLoading: false,
  isError: false,
  errorMsg: '',
};

describe('Home page', () => {
  it('Pagination generation testing', () => {
    expect(getPageNumbers(47, 10, 1)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it('Home page rendering', () => {
    const { getByText } = render(<AboutPage />);
    const HomePageContent = getByText(/AboutPageText/i);
    expect(HomePageContent).toBeInTheDocument();
  });

  it('Error message testing', () => {
    const { container } = customRender(<HomePage />, {
      initialState: { ...initialState, isError: true },
    });

    expect(container.innerHTML).toMatch(/Error. Try to reload the page./i);
  });
});

describe('React Router', () => {
  it('Should navigate to error page if route is wrong', () => {
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

  it(`Should navigate to home page if route is '/'`, () => {
    const history = createMemoryHistory();
    history.push('/');
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );

    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Pagination />
        </Router>
      </Provider>,
    );
    const PaginationComponent = getByTestId('Pagination');
    expect(PaginationComponent).toBeInTheDocument();

    expect(container.innerHTML).toMatch('Search characters by name:');
    expect(container.innerHTML).toMatch('Cards per page:');
  });
});

describe('Redux actions', () => {
  it('Should return correct action', () => {
    expect(setDetailsId('payload')).toStrictEqual({
      payload: 'payload',
      type: 'SET_DETAILS_ID',
    });
    expect(setDetailsInfo('payload')).toStrictEqual({
      payload: 'payload',
      type: 'SET_DETAILS_INFO',
    });
    expect(setCardPerPageValue('payload')).toStrictEqual({
      payload: 'payload',
      type: 'SET_CARD_PER_PAGE_VALUE',
    });
    expect(setCharactersData('payload')).toStrictEqual({
      payload: 'payload',
      type: 'SET_CHARACTERS_DATA',
    });
    expect(setSearchText('payload')).toStrictEqual({
      payload: 'payload',
      type: 'SET_SEARCH_TEXT',
    });
    expect(setLoadingStatus('payload')).toStrictEqual({
      payload: 'payload',
      type: 'SET_LOADING_STATUS',
    });
    expect(setErrorStatus('payload')).toStrictEqual({
      payload: 'payload',
      type: 'SET_ERROR_STATUS',
    });
    expect(setSortType('payload')).toStrictEqual({
      payload: 'payload',
      type: 'SET_SORT_TYPE',
    });
    expect(setNumberOfPage('payload')).toStrictEqual({
      payload: 'payload',
      type: 'SET_NUMBER_OF_PAGE',
    });
  });
});

/*
All files                                                             |    18.8 |        0 |       0 |   20.09 | // init
All files                                                             |   21.18 |     1.87 |    3.13 |   22.27 | // pagination generation
All files                                                             |    29.2 |     4.67 |   11.58 |   30.34 | // 404 testing
All files                                                             |    29.6 |     4.67 |   12.63 |   30.77 | // AboutPage rendering
All files                                                             |    32.8 |     4.67 |   21.05 |   34.19 | // Actions
All files                                                             |    50.8 |    17.76 |   38.95 |      50 | // HomePage testing
All files                                                             |    53.6 |     24.3 |   41.05 |   52.56 | // Error message testing
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
