import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardsContainer from './Components/CardsContainer/CardsContainer';
import Pagination from './Components/Pagination/Pagination';
import Loader from '../../Loader/Loader';
import css from './HomePage.module.css';
import SearchForm from './Components/SearchForm/SearchForm';
import CardsPerPageChanger from './Components/CardsPerPageChanger/CardsPerPageChanger';
import Sort from './Components/Sort/Sort';

const HomePage = ({ isLoading, isError }) => {
  if (isError) {
    <p>Error. Try to reload the page.</p>;
  }

  return (
    <>
      <main className={css.main} data-testid="HomePage">
        <div className={css.inputsContainer}>
          <SearchForm />
          <CardsPerPageChanger />
        </div>
        <Sort />
      </main>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Pagination data-testid="Pagination" />
          <CardsContainer />
        </>
      )}
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
