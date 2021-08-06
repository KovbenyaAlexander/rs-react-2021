import { useState, useEffect } from 'react';

function useFetch(searchText, sort, currentPage, cardsPerPage) {
  const URL = `https://the-one-api.dev/v2/character?page=${currentPage}&limit=${cardsPerPage}&sort=${sort}&name=/${searchText}/i`;
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
        setData(Data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, [searchText, sort, currentPage, cardsPerPage]);

  return { data, loading, error };
}
export default useFetch;
