import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './Pagination.module.css';
import PaginationButton from './PaginationButton/PaginationButton';
import getPageNumbers from './PaginationService';
import { setNumberOfPage } from '../../../../../redux/actions/actions';
import getAllCharacters from '../../../../../redux/actions/thunk/getAllCharacters';

const Pagination = ({
  currentPage,
  setNumberOfPage,
  totalPages,
  getAllCharacters,
}) => {
  const numberButtonsOfPagination = 10;
  const pageNumbers = getPageNumbers(
    totalPages,
    numberButtonsOfPagination,
    currentPage,
  );

  const buttons = [];
  pageNumbers.forEach((number) => {
    buttons.push(
      <PaginationButton key={number} i={number} currentPage={currentPage} />,
    );
  });

  const changePageHandler = (change) => {
    if (change === 'decr' && currentPage > 1) {
      setNumberOfPage(currentPage - 1);
      getAllCharacters();
    }
    if (change === 'inc' && currentPage < totalPages) {
      setNumberOfPage(currentPage + 1);
      getAllCharacters();
    }

    if (change === 'first') {
      setNumberOfPage(1);
      getAllCharacters();
    }
    if (change === 'last') {
      setNumberOfPage(totalPages);
      getAllCharacters();
    }
  };

  return (
    <div className={css.paginationContainer}>
      <button
        className={css.btn}
        onClick={() => changePageHandler('first')}
        type="button"
      >
        START
      </button>
      <button
        className={css.btn}
        onClick={() => changePageHandler('decr')}
        type="button"
      >
        &#8592;
      </button>
      {buttons}
      <button
        className={css.btn}
        onClick={() => changePageHandler('inc')}
        type="button"
      >
        &#8594;
      </button>
      <button
        className={css.btn}
        onClick={() => changePageHandler('last')}
        type="button"
      >
        END
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  totalPages: state.totalPages,
});

const mapDispatchToProps = (dispatch) => ({
  setNumberOfPage: (number) => dispatch(setNumberOfPage(number)),
  getAllCharacters: () => dispatch(getAllCharacters()),
});

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setNumberOfPage: PropTypes.func.isRequired,
  getAllCharacters: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
