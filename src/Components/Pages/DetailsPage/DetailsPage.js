import React from 'react';
import PropTypes from 'prop-types';
import getCaractersInfo from '../../../customHooks/getCaractersInfo';
import Loader from '../../Loader/Loader';
import css from './DetailsPage.module.css';

const DetailsPage = ({ cardID }) => {
  const { data, loading, error } = getCaractersInfo(cardID);

  if (loading) {
    return <Loader />;
  }

  if (error?.msg) {
    return <p>{error.msg}</p>;
  }

  if (error) {
    return <p>Unkown error</p>;
  }

  if (data) {
    return (
      <div className={css.detailsContainer}>
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
          {data.hair ? ` ${data.hair}` : ' not found'}
        </p>
        <p>
          <span className={css.fieldOfCard}>realm:</span>
          {data.realm ? ` ${data.realm}` : ' not found'}
        </p>
        <p>
          <span className={css.fieldOfCard}>spouse:</span>
          {data.spouse ? ` ${data.spouse}` : ' not found'}
        </p>
        <p>
          <span className={css.fieldOfCard}>id:</span>
          {data._id ? ` ${data._id}` : ' not found'}
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
          'link to wiki not found'
        )}
      </div>
    );
  }
  return null;
};

DetailsPage.propTypes = {
  cardID: PropTypes.string.isRequired,
};

export default DetailsPage;
