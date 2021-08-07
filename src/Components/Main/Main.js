import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import CardsPerPageChanger from '../CardsPerPageChanger/CardsPerPageChanger';
import Sort from '../Sort/Sort';
import css from './Main.module.css';

const Main = ({
  setCurrentpage,
  setSearchText,
  onChangeCardPerPageHandler,
  setSortHandler,
}) => {
  const onChangePageHandler = (page) => setCurrentpage(page);
  const onSearchHandler = (text) => {
    setSearchText(text);
    setCurrentpage(1);
  };

  return (
    <main className={css.main}>
      <div className={css.inputsContainer}>
        <SearchForm
          onSearchHandler={onSearchHandler}
          onChangePageHandler={onChangePageHandler}
        />

        <CardsPerPageChanger
          onChangeCardPerPageHandler={onChangeCardPerPageHandler}
          onChangePageHandler={onChangePageHandler}
        />
      </div>

      <Sort setSortHandler={setSortHandler} />
    </main>
  );
};

Main.propTypes = {
  setCurrentpage: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onChangeCardPerPageHandler: PropTypes.func.isRequired,
  setSortHandler: PropTypes.func.isRequired,
};

export default Main;
