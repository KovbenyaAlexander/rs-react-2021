/**
 * @jest-environment jsdom
 */

import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import SearchForm from './Components/Pages/HomePage/Components/SearchForm/SearchForm';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import { createStore } from 'redux';
import { expect } from '@jest/globals';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import getPageNumbers from './Components/Pages/HomePage/Components/Pagination/PaginationService';

const sum = (a, b) => {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

// describe('Redux testing', () => {
//   it('test', () => {
//     const { getByRole } = renderWithRedux(<SearchForm />);
//     expect(getByRole('heading')).toHaveTextContent(
//       'Serach characters by name:',
//     );
//   });
// });

describe('Home page', () => {
  it('pagination generation testing', () => {
    expect(getPageNumbers(47, 10, 1)).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
