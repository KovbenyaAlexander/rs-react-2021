import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './CardsPerPage.module.css';

const ImagesPerPageChanger = ({ setCardsPerPage, onChangePageHandler }) => {
  const [inputValue, setInputvalue] = useState('20');
  const [error, setError] = useState(true);

  useEffect(() => {
    const value = Number(inputValue);
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
  }, [inputValue]);

  const onChangeHandler = (e) => {
    const newInputValue = e.target.value;
    setInputvalue(newInputValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!error) {
      setCardsPerPage(Number(inputValue));
      onChangePageHandler(1);
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
          Number required. Max value - 500. Min - 1.
        </p>
      ) : null}
    </form>
  );
};

ImagesPerPageChanger.propTypes = {
  setCardsPerPage: PropTypes.func.isRequired,
  onChangePageHandler: PropTypes.func.isRequired,
};

export default ImagesPerPageChanger;
