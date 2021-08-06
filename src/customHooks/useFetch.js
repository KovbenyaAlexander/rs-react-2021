import { useState, useEffect } from 'react';

function useFetch(searchText, sort) {
  const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=63a3861adc71749f46aca4a5b7047f94&tags=${searchText}&text=${searchText}&format=json&nojsoncallback=1&sort=${sort}&`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetch(URL)
      .then((response) => response.json())
      .then((Data) => {
        setData(Data.photos);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, [searchText, sort]);

  return { data, loading, error };
}
export default useFetch;
