import { useState, useEffect } from 'react';

function useFetch(searchText, sort, currentPage, imagesPerPage) {
  console.log(`currentPagr-->${currentPage}`);
  console.log(`imagesPerPage-->${imagesPerPage}`);
  // const URL = `https://the-one-api.dev/v2/character?limit=15page=2`;
  const URL = `https://the-one-api.dev/v2/character?page=${currentPage}&limit=${imagesPerPage}&sort=${sort}`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer z6LNSGjwUCwFg_6rz5Zy',
      },
    })
      .then((response) => response.json())
      .then((Data) => {
        // console.log(`PAGES---->>>${Data.photos.pages}`);
        console.log(Data);

        setData(Data);
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
