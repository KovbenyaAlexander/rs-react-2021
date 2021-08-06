import React from 'react';
import PropTypes from 'prop-types';
import css from './CardsContainer.module.css';
import Card from './Card';

const CardsContainer = ({ data }) => {
  // eslint-disable-next-line no-underscore-dangle
  const arrOfImages = data.map((item) => <Card key={item._id} data={item} />);

  return <div className={css.cardsContainer}>{arrOfImages}</div>;
};

export default CardsContainer;

CardsContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
