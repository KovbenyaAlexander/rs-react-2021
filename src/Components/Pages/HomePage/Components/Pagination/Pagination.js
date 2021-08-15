import React from 'react';
import PropTypes from 'prop-types';
import css from './Pagination.module.css';
import PaginationButton from './PaginationButton';
import getPageNumbers from './PaginationService';

const Pagination = ({ totalPages, setCurrentpage, currentPage }) => {
  const numberButtonsOfPagination = 10;
  const pageNumbers = getPageNumbers(
    totalPages,
    numberButtonsOfPagination,
    currentPage,
  );

  const buttons = [];
  pageNumbers.forEach((number) => {
    buttons.push(
      <PaginationButton
        key={number}
        i={number}
        setCurrentpage={setCurrentpage}
        currentPage={currentPage}
      />,
    );
  });

  const changePageHandler = (change) => {
    if (change === 'decr' && currentPage > 1) {
      setCurrentpage((prev) => prev - 1);
      return;
    }
    if (change === 'inc' && currentPage < totalPages - 1) {
      setCurrentpage((prev) => prev + 1);
    }

    if (change === 'first') {
      setCurrentpage(1);
    }
    if (change === 'last') {
      setCurrentpage(totalPages);
    }
  };

  return (
    <div className={css.paginationContainer}>
      <button
        className={css.btn}
        onClick={() => changePageHandler('first')}
        type="button"
      >
        START
      </button>
      <button
        className={css.btn}
        onClick={() => changePageHandler('decr')}
        type="button"
      >
        &#8592;
      </button>
      {buttons}
      <button
        className={css.btn}
        onClick={() => changePageHandler('inc')}
        type="button"
      >
        &#8594;
      </button>
      <button
        className={css.btn}
        onClick={() => changePageHandler('last')}
        type="button"
      >
        END
      </button>
    </div>
  );
};

Pagination.propTypes = {
  setCurrentpage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
