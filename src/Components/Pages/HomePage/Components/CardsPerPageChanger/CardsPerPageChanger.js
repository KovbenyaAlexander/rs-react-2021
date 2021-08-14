import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './CardsPerPage.module.css';
import { setCardPerPageValue } from '../../../../../redux/actions/actions';
import getAllCharacters from '../../../../../redux/actions/thunk/getAllCharacters';

const CardsPerPageChanger = ({ setCardPerPageValue, getAllCharacters }) => {
  const [inputValue, setInputvalue] = useState('20');
  const [error, setError] = useState(true);

  useEffect(() => {
    const value = Number(inputValue);
    setError({});
    if (
      Number.isNaN(value)
      || !Number.isInteger(value)
      || value > 500
      || value < 1
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [inputValue]);

  const onChangeHandler = (e) => {
    const newInputValue = e.target.value;
    setInputvalue(newInputValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!error) {
      setCardPerPageValue(Number(inputValue));
      getAllCharacters();
    }
  };

  return (
    <form className={css.formContainer} onSubmit={(e) => onSubmitHandler(e)}>
      <span className={css.descriptionOfInput}>Cards per page:</span>
      <input
        className={css.input}
        type="text"
        value={inputValue}
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
};

export default connect(null, mapDispatchToProps)(CardsPerPageChanger);
