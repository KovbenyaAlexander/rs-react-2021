import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((Data) => {
        setData(Data.photos.photo);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
      });
  }, [url]);

  return { data, loading, error };
}
export default useFetch;
