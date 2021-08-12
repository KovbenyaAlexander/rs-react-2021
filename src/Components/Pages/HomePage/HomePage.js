import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardsContainer from '../../CardsContainer/CardsContainer';
import Pagination from '../../Pagination/Pagination';
import Loader from '../../Loader/Loader';
import css from './HomePage.module.css';
import SearchForm from '../../SearchForm/SearchForm';
import CardsPerPageChanger from '../../CardsPerPageChanger/CardsPerPageChanger';
import Sort from '../../Sort/Sort';

const HomePage = ({ isLoading, isError }) => {
  console.log(isError);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    <p>Error. Try to reload the page.</p>;
  }

  return (
    <>
      <main className={css.main}>
        <div className={css.inputsContainer}>
          <SearchForm />
          <CardsPerPageChanger />
        </div>
        <Sort />
      </main>
      <Pagination />
      <CardsContainer />
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isError: state.isError,
});

HomePage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HomePage);
