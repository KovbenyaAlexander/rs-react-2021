import React from 'react';
import PropTypes from 'prop-types';
import css from './PaginationButton.module.css';

const PaginationButton = ({ i, setCurrentpage, currentPage }) => {
  const onClickHandler = (newPageNumber) => {
    setCurrentpage(newPageNumber);
  };

  const cssClassesOfButton = currentPage === i ? `${css.btn} ${css.active}` : `${css.btn}`;

  return (
    <button
      type="button"
      className={cssClassesOfButton}
      onClick={() => onClickHandler(i)}
    >
      {i}
    </button>
  );
};

PaginationButton.propTypes = {
  i: PropTypes.number.isRequired,
  setCurrentpage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PaginationButton;
