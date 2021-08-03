import React from 'react';
import useFetch from './customHooks/useFetch';
import ImagesContainer from './Components/ImagesContainer/ImagesContainer';

const App = () => {
  // const URL =
  //   'https://www.flickr.com/services/rest/?method=flickr.test.echo&api_key=63a3861adc71749f46aca4a5b7047f94&name=value';

  'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=63a3861adc71749f46aca4a5b7047f94&text=apple&format=json&nojsoncallback=1&per_page=12&page=2';

  //
  const URL = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=63a3861adc71749f46aca4a5b7047f94&tags=formula1&text=formula1&format=json&nojsoncallback=1&sort=interestingness-desc&';

  const { data, loading, error } = useFetch(URL);

  if (loading) {
    return <p className="App">Loading...</p>;
  }

  if (data) {
    return (
      <div className="App">
        <ImagesContainer data={data} />
      </div>
    );
  }

  if (error) {
    return <p> Something went wrong</p>;
  }

  return <p> Something went wrong</p>;
};
export default App;
