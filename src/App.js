import React, { useState } from 'react';
import useFetch from './customHooks/useFetch';
import ImagesContainer from './Components/ImagesContainer/ImagesContainer';
import Pagination from './Components/Pagination/Pagination';

const App = () => {
  const URL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=63a3861adc71749f46aca4a5b7047f94&tags=dubai&text=dubai&format=json&nojsoncallback=1&sort=interestingness-desc&';

  const { data, loading, error } = useFetch(URL);
  const [imagesPerPage, setImagesPerPage] = useState(20);
  const [currentPage, setCurrentpage] = useState(1);
  const lastImageIndexInPage = currentPage * imagesPerPage;
  const firstImageIndexInPage = lastImageIndexInPage - imagesPerPage;
  const imagesInCurrentPage = data?.slice(
    firstImageIndexInPage,
    lastImageIndexInPage,
  );

  const onChangePageHandler = (page) => setCurrentpage(page);

  if (loading) {
    return <p className="App">Loading...</p>;
  }

  if (data) {
    return (
      <div className="App">
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
