import React from 'react';
import useFetch from './Components/customHooks/useFetch';

const App = () => {
  const { data, loading, error } = useFetch('https://api.quotable.io/random');
  // const { data, loading, error } = useFetch('https://api.aaaaa.io/random');

  return (
    <div className="App">
      {loading && <p>LOADING</p>}
      {error && <p>Eror</p>}
      {data && <p>{data.author}</p>}
      {data && <p>{data.authorSlug}</p>}
      {data && <p>{data.content}</p>}
    </div>
  );
};
export default App;
