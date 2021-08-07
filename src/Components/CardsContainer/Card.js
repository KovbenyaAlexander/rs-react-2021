import React from 'react';
import PropTypes from 'prop-types';
import css from './Card.module.css';

const Card = ({ data }) => {
  console.log(data);

  return (
    <div className={css.cardContainer}>
      <p>
        <span className={css.fieldOfCard}>name:</span>
        {data.name ? ` ${data.name}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>race:</span>
        {data.race ? ` ${data.race}` : ' not found'}
      </p>

      <p>
        <span className={css.fieldOfCard}>gender:</span>
        {data.gender ? `${data.gender}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>race:</span>
        {data.race ? ` ${data.race}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>birth:</span>
        {data.birth ? ` ${data.birth}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>death:</span>
        {data.death ? ` ${data.death}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>hair:</span>
        {data.death ? ` ${data.death}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>realm:</span>
        {data.realm ? ` ${data.realm}` : ' not found'}
      </p>

      {data.wikiUrl ? (
        <a
          href={data.wikiUrl}
          className={css.link}
          target="_blank"
          rel="noreferrer"
        >
          link to wiki
        </a>
      ) : (
        'link not found'
      )}
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    race: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired,
    death: PropTypes.string.isRequired,
    hair: PropTypes.string.isRequired,
    realm: PropTypes.string.isRequired,
    wikiUrl: PropTypes.string.isRequired,
  }).isRequired,
};
