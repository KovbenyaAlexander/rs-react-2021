import React, { useState } from 'react';
import useFetch from './customHooks/useFetch';
import ImagesContainer from './Components/ImagesContainer/ImagesContainer';
import Pagination from './Components/Pagination/Pagination';
import Form from './Components/Form/Form';
import ImagesPerPageChanger from './Components/ImagesPerPageChanger/ImagesPerPageChanger';
import Sort from './Components/Sort/Sort';

const App = () => {
  const [imagesPerPage, setImagesPerPage] = useState(20);
  const [currentPage, setCurrentpage] = useState(1);
  const [searchText, setSearchText] = useState('car');
  const [sort, setSort] = useState('relevance');
  const { data, loading, error } = useFetch(searchText, sort);
  const lastImageIndexInPage = currentPage * imagesPerPage;
  const firstImageIndexInPage = lastImageIndexInPage - imagesPerPage;
  const imagesInCurrentPage = data?.slice(
    firstImageIndexInPage,
    lastImageIndexInPage
  );
  const onChangePageHandler = (page) => setCurrentpage(page);
  const onSearchHandler = (text) => setSearchText(text);
  const onChangeImgPerPageHandler = (number) => setImagesPerPage(number);
  const setSortHandler = (sortType) => setSort(sortType);

  if (loading) {
    return (
      <div className="App">
        <Form onSearchHandler={onSearchHandler} />
        <ImagesPerPageChanger
          onChangeImgPerPageHandler={onChangeImgPerPageHandler}
          onChangePageHandler={onChangePageHandler}
        />
        <Sort setSortHandler={setSortHandler} />
        <p>Loading...</p>
      </div>
    );
  }

  if (data) {
    return (
      <div className="App">
        <Form onSearchHandler={onSearchHandler} />
        <ImagesPerPageChanger
          onChangeImgPerPageHandler={onChangeImgPerPageHandler}
          onChangePageHandler={onChangePageHandler}
        />
        <Sort setSortHandler={setSortHandler} />
        <Pagination
          imagesPerPage={imagesPerPage}
          totalImages={data.length}
          onChangePageHandler={onChangePageHandler}
        />
        <ImagesContainer data={imagesInCurrentPage} />
      </div>
    );
  }

  if (error) {
    return <p> Something went wrong</p>;
  }

  return <p> Something went wrong</p>;
};
export default App;
