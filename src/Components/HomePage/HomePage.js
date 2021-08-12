import React from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';
import Pagination from '../Pagination/Pagination';
// import Loader from '../Loader/Loader';
import Main from '../Main/Main';
// import css from './HomePage.module.css';

const App = () => (
  <>
    <Main />
    <Pagination />
    <CardsContainer />
  </>
);
// if (loading) {
//   return (
//     <>
//       <Main />
//       <Loader />
//     </>
//   );
// }

// if (data) {

// }

// if (error.isError || error.msg) {
//   return (
//     <>
//       <Main />
//       <p className={css.errorMsg}>{error.msg}</p>
//     </>
//   );
// }

// return <p> Something went wrong</p>;
export default App;
