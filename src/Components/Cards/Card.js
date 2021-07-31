import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => (
  <div>
    <p>{card.name}</p>
    <p>{card.date}</p>
    <p>{card.sex}</p>
    <p>{card.family}</p>
    <p>{card.email}</p>
    <hr />
  </div>
);

export default Card;

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    family: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};
