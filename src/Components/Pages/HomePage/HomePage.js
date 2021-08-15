import React, { useState } from 'react';
import useFetch from '../../../customHooks/useFetch';
import CardsContainer from './Components/CardsContainer/CardsContainer';
import Pagination from './Components/Pagination/Pagination';
import Loader from '../../Loader/Loader';
import Main from './Components/Main/Main';
import css from './HomePage.module.css';

const App = () => {
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const [currentPage, setCurrentpage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('name:asc');
  const { data, loading, error } = useFetch(
    searchText,
    sort,
    currentPage,
    cardsPerPage,
  );

  if (loading) {
    return (
      <>
        <Main
          setCurrentpage={setCurrentpage}
          setSearchText={setSearchText}
          setCardsPerPage={setCardsPerPage}
          setSort={setSort}
        />
        <Loader />
      </>
    );
  }

  if (data) {
    return (
      <>
        <Main
          setCurrentpage={setCurrentpage}
          setSearchText={setSearchText}
          setCardsPerPage={setCardsPerPage}
          setSort={setSort}
        />
        <Pagination
          totalPages={data.pages}
          setCurrentpage={setCurrentpage}
          currentPage={currentPage}
        />
        <CardsContainer data={data.docs} />
      </>
    );
  }

  if (error.isError || error.msg) {
    return (
      <>
        <Main
          setCurrentpage={setCurrentpage}
          setSearchText={setSearchText}
          setCardsPerPage={setCardsPerPage}
          setSort={setSort}
        />
        <p className={css.errorMsg}>{error.msg}</p>
      </>
    );
  }

  return <p> Something went wrong</p>;
};
export default App;
