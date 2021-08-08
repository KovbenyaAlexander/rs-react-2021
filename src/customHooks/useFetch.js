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
        Authorization: 'Bearer db3XQf7N45ifx9Pj1BAA',
      },
    })
      .then((response) => {
        if (response.status === 429) {
          setError({
            isError: true,
            msg: 'Too many requests. Try later.',
          });
        }
        return response.json();
      })
      .then((Data) => {
        setData(Data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError((prev) => ({ ...prev, error: true }));
      });
  }, [searchText, sort, currentPage, cardsPerPage]);

  return { data, loading, error };
}
export default useFetch;
