import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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
      {error ? 'error' : null}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onChangeHandler(e)}
      />
      <button type="submit">Change</button>
    </form>
  );
};

ImagesPerPageChanger.propTypes = {
  onChangeImgPerPageHandler: PropTypes.func.isRequired,
  onChangePageHandler: PropTypes.func.isRequired,
};

export default ImagesPerPageChanger;
