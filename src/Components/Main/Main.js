import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import CardsPerPageChanger from '../CardsPerPageChanger/CardsPerPageChanger';
import Sort from '../Sort/Sort';
import css from './Main.module.css';

const Main = ({
  setCurrentpage, setSearchText, setCardsPerPage, setSort,
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
          setCardsPerPage={setCardsPerPage}
          onChangePageHandler={onChangePageHandler}
        />
      </div>

      <Sort setSort={setSort} />
    </main>
  );
};

Main.propTypes = {
  setCurrentpage: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setCardsPerPage: PropTypes.func.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default Main;
