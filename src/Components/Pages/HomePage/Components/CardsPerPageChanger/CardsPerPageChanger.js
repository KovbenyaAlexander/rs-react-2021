import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './CardsPerPage.module.css';
import { setCardPerPageValue } from '../../../../../redux/actions/actions';
import getAllCharacters from '../../../../../redux/actions/thunk/getAllCharacters';

const CardsPerPageChanger = ({
  setCardPerPageValue,
  getAllCharacters,
  cardsPerPage = 20,
}) => {
  const [error, setError] = useState(true);

  useEffect(() => {
    const value = Number(cardsPerPage);
    setError({});
    if (
      Number.isNaN(value) ||
      !Number.isInteger(value) ||
      value > 500 ||
      value < 1
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [cardsPerPage]);

  const onChangeHandler = (e) => {
    const newInputValue = e.target.value;
    setCardPerPageValue(newInputValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!error) {
      setCardPerPageValue(Number(cardsPerPage));
      getAllCharacters();
    }
  };

  return (
    <form className={css.formContainer} onSubmit={(e) => onSubmitHandler(e)}>
      <span className={css.descriptionOfInput}>Cards per page:</span>
      <input
        className={css.input}
        type="text"
        value={cardsPerPage}
        onChange={(e) => onChangeHandler(e)}
      />
      <button className={css.submit} type="submit">
        Change
      </button>
      {error ? (
        <p className={css.errorMessage}>
          Number required. Max value is 500. Min is 1.
        </p>
      ) : null}
    </form>
  );
};

const mapStateToProps = (state) => ({
  cardsPerPage: state.cardsPerPage,
});

const mapDispatchToProps = (dispatch) => ({
  setCardPerPageValue: (inputValue) => {
    dispatch(setCardPerPageValue(inputValue));
  },
  getAllCharacters: () => {
    dispatch(getAllCharacters());
  },
});

CardsPerPageChanger.propTypes = {
  setCardPerPageValue: PropTypes.func.isRequired,
  getAllCharacters: PropTypes.func.isRequired,
  cardsPerPage: PropTypes.number,
};

CardsPerPageChanger.defaultProps = {
  cardsPerPage: '',
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardsPerPageChanger);
