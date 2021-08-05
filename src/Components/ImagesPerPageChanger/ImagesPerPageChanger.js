import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './imgPerPage.module.css';

const ImagesPerPageChanger = ({
  onChangeImgPerPageHandler,
  onChangePageHandler,
}) => {
  const [inputValue, setInputvalue] = useState('20');
  const [error, setError] = useState(true);

  useEffect(() => {
    const value = Number(inputValue);
    setError({});
    if (Number.isNaN(value) || !Number.isInteger(value)) {
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
      onChangeImgPerPageHandler(Number(inputValue));
      onChangePageHandler(1);
    }
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <span className={css.descriptionOfInput}>Images per page:</span>
      {error ? 'error' : null}
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={(e) => onChangeHandler(e)}
      />
      <button className={css.submit} type="submit">
        Change
      </button>
    </form>
  );
};

ImagesPerPageChanger.propTypes = {
  onChangeImgPerPageHandler: PropTypes.func.isRequired,
  onChangePageHandler: PropTypes.func.isRequired,
};

export default ImagesPerPageChanger;
