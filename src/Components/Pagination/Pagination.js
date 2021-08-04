import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ imagesPerPage, totalImages, onChangePageHandler }) => {
  const valuesOfButtons = [];
  const numberOfPages = Math.ceil(totalImages / imagesPerPage);

  for (let i = 1; i <= numberOfPages; i += 1) {
    valuesOfButtons.push(i);
  }

  const arrayOfButtons = valuesOfButtons.map((number) => (
    <li key={number}>
      <button type="button" onClick={() => onChangePageHandler(number)}>
        {number}
      </button>
    </li>
  ));
  return (
    <div>
      <ul>{arrayOfButtons}</ul>
    </div>
  );
};

Pagination.propTypes = {
  imagesPerPage: PropTypes.number.isRequired,
  totalImages: PropTypes.number.isRequired,
  onChangePageHandler: PropTypes.func.isRequired,
};

export default Pagination;
