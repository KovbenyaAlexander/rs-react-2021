import React from 'react';
import PropTypes from 'prop-types';
// import css from './Pagination.module.css';
import PaginationButton from './PaginationButton';
import getPageNumbers from './PaginationService';

const Pagination = ({ totalPages, setCurrentpage, currentPage }) => {
  const pageNumbers = getPageNumbers(totalPages, 10, currentPage);

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
    <div>
      <button onClick={() => changePageHandler('first')} type="button">
        first
      </button>
      <button onClick={() => changePageHandler('decr')} type="button">
        Left
      </button>
      {buttons}
      <button onClick={() => changePageHandler('inc')} type="button">
        Right
      </button>
      <button onClick={() => changePageHandler('last')} type="button">
        last
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
