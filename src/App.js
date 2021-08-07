import React, { useState } from 'react';
import useFetch from './customHooks/useFetch';
import CardsContainer from './Components/CardsContainer/CardsContainer';
import Pagination from './Components/Pagination/Pagination';
import Loader from './Components/Loader/Loader';
import Main from './Components/Main/Main';

const App = () => {
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const [currentPage, setCurrentpage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('name:asc');
  const { data, loading, error } = useFetch(
    searchText,
    sort,
    currentPage,
    cardsPerPage
  );

  if (loading) {
    return (
      <div className="App">
        <Main
          setCurrentpage={setCurrentpage}
          setSearchText={setSearchText}
          setCardsPerPage={setCardsPerPage}
          setSort={setSort}
        />
        <Loader />
      </div>
    );
  }

  if (data) {
    return (
      <div className="App">
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
      </div>
    );
  }

  if (error.isError || error.msg) {
    return (
      <div className="App">
        <Main
          setCurrentpage={setCurrentpage}
          setSearchText={setSearchText}
          setCardsPerPage={setCardsPerPage}
          setSort={setSort}
        />
        <p>{error.msg}</p>
      </div>
    );
  }

  return <p> Something went wrong</p>;
};
export default App;
