import { useState, useEffect } from 'react';

function useFetch(searchText, sort, currentPage, imagesPerPage) {
  console.log(`currentPagr-->${currentPage}`);
  console.log(`imagesPerPage-->${imagesPerPage}`);
  const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=63a3861adc71749f46aca4a5b7047f94&tags=${searchText}&format=json&nojsoncallback=1&sort=${sort}&page=${currentPage}&per_page=${imagesPerPage}`;
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
        console.log(`PAGES---->>>${Data.photos.pages}`);
        console.log(Data);

        setData(Data.photos);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, [searchText, sort, currentPage, imagesPerPage]);

  return { data, loading, error };
}
export default useFetch;
