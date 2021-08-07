import React, { useState } from 'react';
import useFetch from './customHooks/useFetch';
import CardsContainer from './Components/CardsContainer/CardsContainer';
import Pagination from './Components/Pagination/Pagination';
import SearchForm from './Components/SearchForm/SearchForm';
import CardsPerPageChanger from './Components/CardsPerPageChanger/CardsPerPageChanger';
import Sort from './Components/Sort/Sort';
import Loader from './Components/Loader/Loader';

const App = () => {
  const [cardsPerPage, setCardsPerPage] = useState(20);
  const [currentPage, setCurrentpage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState('');
  const { data, loading, error } = useFetch(
    searchText,
    sort,
    currentPage,
    cardsPerPage
  );

  const onChangePageHandler = (page) => setCurrentpage(page);
  const onSearchHandler = (text) => {
    setSearchText(text);
    setCurrentpage(1);
  };
  const onChangeCardPerPageHandler = (number) => setCardsPerPage(number);
  const setSortHandler = (sortType) => setSort(sortType);

  if (loading) {
    return (
      <div className="App">
        <SearchForm
          onSearchHandler={onSearchHandler}
          onChangePageHandler={onChangePageHandler}
        />
        <CardsPerPageChanger
          onChangeCardPerPageHandler={onChangeCardPerPageHandler}
          onChangePageHandler={onChangePageHandler}
        />
        <Sort setSortHandler={setSortHandler} />
        {/* <p>Loading...</p> */}
        <Loader />
      </div>
    );
  }

  if (data) {
    return (
      <div className="App">
        <SearchForm
          onSearchHandler={onSearchHandler}
          onChangePageHandler={onChangePageHandler}
        />
        <CardsPerPageChanger
          onChangeCardPerPageHandler={onChangeCardPerPageHandler}
          onChangePageHandler={onChangePageHandler}
        />
        <Sort setSortHandler={setSortHandler} />
        <Pagination
          totalPages={data.pages}
          setCurrentpage={setCurrentpage}
          currentPage={currentPage}
        />
        <CardsContainer data={data.docs} />
      </div>
    );
  }

  if (error) {
    return <p> Something went wrong</p>;
  }

  return <p> Something went wrong</p>;
};
export default App;
