import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import CardsPerPageChanger from '../CardsPerPageChanger/CardsPerPageChanger';
import Sort from '../Sort/Sort';
import css from './Main.module.css';

const Main = () => {
  // const onChangePageHandler = (page) => setCurrentpage(page);
  // const onSearchHandler = (text) => {
  //   setSearchText(text);
  //   setCurrentpage(1);
  // };
  console.log('sdaf');

  return (
    <main className={css.main}>
      <div className={css.inputsContainer}>
        <SearchForm />
        <CardsPerPageChanger />
      </div>
      <Sort />
    </main>
  );
};

export default Main;
