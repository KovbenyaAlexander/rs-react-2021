import React from 'react';
import PropTypes from 'prop-types';
import css from './CardsContainer.module.css';
import Card from './Card';

const CardsContainer = ({ data }) => {
  const arrOfImages = data.map((item) => <Card key={item._id} data={item} />);

  if (arrOfImages.length) {
    return <div className={css.cardsContainer}>{arrOfImages}</div>;
  }
  return <span className={css.notFoundMsg}>Results not found</span>;
};

export default CardsContainer;

CardsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
