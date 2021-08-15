import React from 'react';
import PropTypes from 'prop-types';
import css from './Card.module.css';

const Card = ({ card }) => (
  <div className={css.cardContainer}>
    <p>
      <b>Name:</b> {card.name}
    </p>

    <p>
      <b>Email:</b> {card.email}
    </p>

    <p>
      <b>Date of birth:</b> {card.date}
    </p>

    <p>
      <b>Sex:</b> {card.sex}
    </p>

    <p>
      <b>Family status:</b> {card.family}
    </p>
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
