import React, { useState } from 'react';
import useFetch from './customHooks/useFetch';
import ImagesContainer from './Components/ImagesContainer/ImagesContainer';
import Pagination from './Components/Pagination/Pagination';
import Form from './Components/Form/Form';

const App = () => {
  const [imagesPerPage, setImagesPerPage] = useState(20);
  const [currentPage, setCurrentpage] = useState(1);
  const [searchText, setSearchText] = useState('cars');
  const { data, loading, error } = useFetch(searchText);
  const lastImageIndexInPage = currentPage * imagesPerPage;
  const firstImageIndexInPage = lastImageIndexInPage - imagesPerPage;
  const imagesInCurrentPage = data?.slice(
    firstImageIndexInPage,
    lastImageIndexInPage,
  );
  const onChangePageHandler = (page) => setCurrentpage(page);
  const onSearchHandler = (text) => setSearchText(text);

  if (loading) {
    return <p className="App">Loading...</p>;
  }

  if (data) {
    return (
      <div className="App">
        <Form onSearchHandler={onSearchHandler} />
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
