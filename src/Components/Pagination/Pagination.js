import React from 'react';
import PropTypes from 'prop-types';
import css from './Pagination.module.css';

const Pagination = ({ imagesPerPage, totalImages, onChangePageHandler }) => {
  const valuesOfButtons = [];
  const numberOfPages = Math.ceil(totalImages / imagesPerPage);

  for (let i = 1; i <= numberOfPages; i += 1) {
    valuesOfButtons.push(i);
  }

  const arrayOfButtons = valuesOfButtons.map((number) => (
    <li className={css.listItem} key={number}>
      <button
        type="button"
        className={css.paginationElem}
        onClick={() => onChangePageHandler(number)}
      >
        {number}
      </button>
    </li>
  ));
  return (
    <div>
      <ul className={css.paginationList}>{arrayOfButtons}</ul>
    </div>
  );
};

Pagination.propTypes = {
  imagesPerPage: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
  onChangePageHandler: PropTypes.func.isRequired,
};

export default Pagination;
