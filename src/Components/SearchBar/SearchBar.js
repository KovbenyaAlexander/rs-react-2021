import React from 'react';
import css from './SearchBar.module.css';

const SearchBar = () => (
  <header className={css.header}>
    <input className={css.input} type="text" placeholder="Search" />
  </header>
);

export default SearchBar;
