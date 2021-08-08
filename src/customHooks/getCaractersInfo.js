import { useState, useEffect } from 'react';

function useFetch(id) {
  console.log(id);

  const URL = `https://the-one-api.dev/v2/character/${id}`;
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
        // Authorization: 'Bearer z6LNSGjwUCwFg_6rz5Zy',
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
        setData(Data.docs[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError((prev) => ({ ...prev, error: true }));
      });
  }, [id]);

  return { data, loading, error };
}
export default useFetch;
