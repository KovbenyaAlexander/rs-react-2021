import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getDetailsInfo from '../../../redux/actions/thunk/getDetailsInfo';
import Loader from '../../Loader/Loader';
import css from './DetailsPage.module.css';

const DetailsPage = ({ getDetailsInfo, detailsInfo, isLoading, isError }) => {
  useEffect(() => {
    getDetailsInfo();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Error. Try to reload the page.</p>;
  }

  return (
    <div className={css.detailsContainer}>
      <p>
        <span className={css.fieldOfCard}>name:</span>
        {detailsInfo.name ? ` ${detailsInfo.name}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>race:</span>
        {detailsInfo.race ? ` ${detailsInfo.race}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>gender:</span>
        {detailsInfo.gender ? `${detailsInfo.gender}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>race:</span>
        {detailsInfo.race ? ` ${detailsInfo.race}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>birth:</span>
        {detailsInfo.birth ? ` ${detailsInfo.birth}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>death:</span>
        {detailsInfo.death ? ` ${detailsInfo.death}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>hair:</span>
        {detailsInfo.hair ? ` ${detailsInfo.hair}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>realm:</span>
        {detailsInfo.realm ? ` ${detailsInfo.realm}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>spouse:</span>
        {detailsInfo.spouse ? ` ${detailsInfo.spouse}` : ' not found'}
      </p>
      <p>
        <span className={css.fieldOfCard}>id:</span>
        {detailsInfo._id ? ` ${detailsInfo._id}` : ' not found'}
      </p>
      {detailsInfo.wikiUrl ? (
        <a
          href={detailsInfo.wikiUrl}
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
};

const mapStateToProps = (state) => ({
  detailsInfo: state.detailsInfo,
  isLoading: state.isLoading,
  isError: state.isError,
});

const mapDispatchToProps = (dispatch) => ({
  getDetailsInfo: () => dispatch(getDetailsInfo()),
});

DetailsPage.propTypes = {
  getDetailsInfo: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  detailsInfo: PropTypes.shape({
    race: PropTypes.string,
    name: PropTypes.string,
    gender: PropTypes.string,
    birth: PropTypes.string,
    death: PropTypes.string,
    hair: PropTypes.string,
    realm: PropTypes.string,
    wikiUrl: PropTypes.string,
    _id: PropTypes.string,
    spouse: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
