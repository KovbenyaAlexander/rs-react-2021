import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './CardsContainer.module.css';
import Card from './Card/Card';

const CardsContainer = ({ charactersData, isError, errorMsg }) => {
  const arrOfCards = charactersData.map((item) => (
    <Card key={item._id} data={item} />
  ));

  if (arrOfCards.length) {
    return <div className={css.cardsContainer}>{arrOfCards}</div>;
  }

  if (isError && errorMsg) {
    return <span className={css.errorMsg}> {errorMsg} </span>;
  }

  if (isError) {
    return (
      <span className={css.errorMsg}> Error. Try to reload the page.</span>
    );
  }

  return <span className={css.errorMsg}>Results not found</span>;
};

const mapStateToProps = (state) => ({
  charactersData: state.charactersData,
  isError: state.isError,
  errorMsg: state.errorMsg,
});

export default connect(mapStateToProps)(CardsContainer);

CardsContainer.propTypes = {
  charactersData: PropTypes.arrayOf(PropTypes.object).isRequired,
  isError: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};
