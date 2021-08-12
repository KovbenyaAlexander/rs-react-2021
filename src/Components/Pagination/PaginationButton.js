import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import css from './PaginationButton.module.css';
import getAllCharacters from '../../redux/actions/thunk/getAllCharacters';
import { setNumberOfPage } from '../../redux/actions/actions';

const PaginationButton = ({
  i,
  setNumberOfPage,
  currentPage,
  getAllCharacters,
}) => {
  const onClickHandler = (newPageNumber) => {
    setNumberOfPage(newPageNumber);
    getAllCharacters();
  };

  const cssClassesOfButton = currentPage === i ? `${css.btn} ${css.active}` : `${css.btn}`;

  if (i > 0) {
    return (
      <button
        type="button"
        className={cssClassesOfButton}
        onClick={() => onClickHandler(i)}
      >
        {i}
      </button>
    );
  }
  return null;
};

const mapDispatchToProps = (dispatch) => ({
  getAllCharacters: () => dispatch(getAllCharacters()),
  setNumberOfPage: (number) => dispatch(setNumberOfPage(number)),
});

PaginationButton.propTypes = {
  i: PropTypes.number.isRequired,
  setNumberOfPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  getAllCharacters: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PaginationButton);
