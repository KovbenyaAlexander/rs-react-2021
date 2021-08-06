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
      />
    );
  });

  const paginationArrowHandler = (direction) => {
    if (direction === 'decr' && currentPage > 1) {
      setCurrentpage((prev) => prev - 1);
      return;
    }
    if (direction === 'inc' && currentPage < totalPages - 1) {
      setCurrentpage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <button onClick={() => paginationArrowHandler('decr')} type="button">
        Left
      </button>
      {buttons}
      <button onClick={() => paginationArrowHandler('inc')} type="button">
        Right
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
