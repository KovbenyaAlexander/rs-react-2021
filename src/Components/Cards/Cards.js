import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ cards }) => {
  const data = cards.map((card, i) => (
    <Card key={`${card.name + i}`} card={card} />
  ));
  return <div>{data}</div>;
};

export default Cards;

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
