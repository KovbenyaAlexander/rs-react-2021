/**
 * @jest-environment jsdom
 */
/* eslint-disable react/prop-types */

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import getPageNumbers from './Components/Pages/HomePage/Components/Pagination/PaginationService';
import App from './App';
import reducer from './redux/reducer';
import SearchForm from './Components/Pages/HomePage/Components/SearchForm/SearchForm';
import HomePage from './Components/Pages/HomePage/HomePage';
import DetailsPage from './Components/Pages/DetailsPage/DetailsPage';
import CardsContainer from './Components/Pages/HomePage/Components/CardsContainer/CardsContainer';
import Sort from './Components/Pages/HomePage/Components/Sort/Sort';
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

global.fetch = require('node-fetch');

const customRender = (
  component,
  initialState = {},
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
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
  const mockData = [
    {
      birth: 'birth',
      death: 'death',
      gender: 'Female___',
      hair: 'hair',
      height: 'height',
      name: 'Adanel',
      race: 'Human',
      realm: 'realm',
      spouse: 'Belemir',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adanel',
      _id: 'testID_1',
    },
    {
      birth: 'birth',
      death: 'death',
      gender: 'Female___',
      hair: 'hair',
      height: 'height',
      name: 'Adanel',
      race: 'Human',
      realm: 'realm',
      spouse: 'Belemir',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adanel',
      _id: 'testID_2',
    },
  ];

  it('Pagination generation testing', () => {
    expect(getPageNumbers(47, 10, 1)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it('Click on pagination testing', () => {
    const { getByText } = customRender(<Pagination />, {
      ...initialState,
      totalPages: 50,
    });

    const ENDButton = getByText('END');
    fireEvent.click(ENDButton);
    for (let i = 41; i <= 50; i += 1) {
      expect(getByText(i)).toBeInTheDocument();
    }

    const STARTButton = getByText('START');
    fireEvent.click(STARTButton);
    for (let i = 1; i <= 10; i += 1) {
      expect(getByText(i)).toBeInTheDocument();
    }
  });

  it('Error message testing', () => {
    const { container } = customRender(<HomePage />, {
      ...initialState,
      isError: true,
    });
    expect(container.innerHTML).toMatch(/Error. Try to reload the page./i);
  });

  it('Rendering cards testing - succes', async () => {
    const { findAllByTestId } = customRender(<CardsContainer />, {
      ...initialState,
      charactersData: mockData,
    });

    const items = await findAllByTestId(/Card/i);
    expect(items).toHaveLength(2);
  });

  it('Rendering cards testing - error', () => {
    const { container } = customRender(<CardsContainer />, {
      ...initialState,
      charactersData: mockData,
      isError: true,
    });

    expect(container.innerHTML).toMatch(/Error. Try to reload the page./i);
  });

  it('Rendering cards testing - data not found', () => {
    const { container } = customRender(<CardsContainer />, {
      ...initialState,
      charactersData: [],
    });

    expect(container.innerHTML).toMatch(/Results not found/i);
  });

  it('Search form onchange testing', async () => {
    const { queryByPlaceholderText } = customRender(<SearchForm />);
    const searchInput = queryByPlaceholderText('Search text');
    fireEvent.change(searchInput, { target: { value: 'JEST' } });
    expect(searchInput.value).toBe('JEST');
  });

  it('Sort onchange inputs testing_______________', () => {
    const { getByTestId } = customRender(<Sort />);
    const sortByRace = getByTestId('sortByRace');
    const sortByName = getByTestId('sortByName');
    const sortByGender = getByTestId('sortByGender');
    const sortByBirth = getByTestId('sortByBirth');

    fireEvent.click(sortByRace);

    expect(sortByRace.checked).toEqual(true);
    expect(sortByName.checked).toEqual(false);
    expect(sortByGender.checked).toEqual(false);
    expect(sortByBirth.checked).toEqual(false);
  });
});

describe('React Router', () => {
  it('Should navigate to error page if route is wrong', () => {
    const history = createMemoryHistory();
    history.push('/wrong-route');
    const { container } = customRender(<App />, { initialState }, { history });

    expect(container.innerHTML).toMatch('Error 404. Page not found.');
  });

  it(`Should navigate to home page if route is '/'`, () => {
    const history = createMemoryHistory();
    history.push('/');
    const { container, getByTestId } = customRender(<App />, initialState, {
      history,
    });

    const HomePageComponent = getByTestId('HomePage');
    expect(HomePageComponent).toBeInTheDocument();

    expect(container.innerHTML).toMatch('Search characters by name:');
    expect(container.innerHTML).toMatch('Cards per page:');
  });
});

describe('Redux', () => {
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

describe('Details Page', () => {
  it('Fetch data from api testing - succes', async () => {
    const mockData = {
      birth: 'birth',
      death: 'death',
      gender: 'Female___',
      hair: 'hair',
      height: 'height',
      name: 'Adanel',
      race: 'Human',
      realm: 'realm',
      spouse: 'Belemir',
      wikiUrl: 'http://lotr.wikia.com//wiki/Adanel',
      _id: 'testID',
    };
    const history = createMemoryHistory();
    history.push('/details/testID');
    const { findAllByTestId } = customRender(
      <DetailsPage />,
      {
        isLoading: false,
        detailsInfo: mockData,
        isError: false,
      },
      { history },
    );
    const items = await findAllByTestId(/detailsItem/i);
    expect(items).toHaveLength(11);
  });

  it('Fetch data from api testing - fail', async () => {
    const mockData = {};
    const history = createMemoryHistory();
    history.push('/details/testID');
    const { findByTestId } = customRender(
      <DetailsPage />,
      {
        isLoading: false,
        detailsInfo: mockData,
        isError: true,
      },
      { history },
    );
    const errorMsg = await findByTestId(/detailsErrorMsg/i);
    expect(errorMsg).toBeInTheDocument();
  });

  it('Fetch data from api testing - loader', async () => {
    const mockData = {};
    const history = createMemoryHistory();
    history.push('/details/testID');
    const { findByTestId } = customRender(
      <DetailsPage />,
      {
        isLoading: true,
        detailsInfo: mockData,
        isError: false,
      },
      { history },
    );
    const loader = await findByTestId(/loader/i);
    expect(loader).toBeInTheDocument();
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
All files                                                             |   63.75 |    40.19 |   53.68 |   62.13 | // Details page fetch
All files                                                             |   65.08 |    49.53 |   54.74 |   63.56 | // Card rendering
All files                                                             |   64.94 |     48.6 |   54.74 |    63.4 | // ? Card rendering - error and data not found cases
All files                                                             |   66.14 |     48.6 |   56.84 |   64.68 | // SearchForm onchange
All files                                                             |   71.31 |    57.01 |   62.11 |   70.21 | // Pagination click testing
All files                                                             |   73.31 |    59.26 |   65.26 |   71.91 | // Sort onchange testing
*/
