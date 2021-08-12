import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './CardsContainer.module.css';
import Card from './Card';

const CardsContainer = ({ charactersData }) => {
  const arrOfCards = charactersData.map((item) => (
    <Card key={item._id} data={item} />
  ));

  if (arrOfCards.length) {
    return <div className={css.cardsContainer}>{arrOfCards}</div>;
  }
  return <span className={css.notFoundMsg}>Results not found</span>;
};

const mapStateToProps = (state) => ({
  charactersData: state.charactersData,
});

// const mapDispatchToProps = (dispatch) => ({
//   setSearchText: (searchText) => dispatch(setSearchText(searchText)),
//   getAllCharacters: () => dispatch(getAllCharacters()),
// });

export default connect(mapStateToProps)(CardsContainer);

CardsContainer.propTypes = {
  charactersData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
