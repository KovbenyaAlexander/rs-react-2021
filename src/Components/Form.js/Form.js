import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

const Form = ({ addCard, setShowMessage }) => {
  const initialState = {
    name: '',
    email: '',
    date: '',
    sex: '',
    family: '',
  };

  const [state, setState] = useState(initialState);

  const onChangeHandler = (e) => {
    const typeOfInput = e.target.name;
    const newValue = e.target.value;

    if (typeOfInput === 'familyStatus') {
      const value = e.target.id;
      setState((prevState) => {
        const PrevState = prevState;
        return {
          ...PrevState,
          family: value,
        };
      });
      return;
    }

    setState((prevState) => {
      const PrevState = prevState;
      return {
        ...PrevState,
        [typeOfInput]: newValue,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addCard(state);
    setState(initialState);
    setShowMessage(true);
  };

  return (
    <form className={css.form} onSubmit={onSubmitHandler}>
      <label htmlFor="name">
        Name
        <input
          value={state.name}
          onChange={(e) => onChangeHandler(e)}
          type="text"
          name="name"
          required
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          value={state.email}
          name="email"
          required
          onChange={(e) => onChangeHandler(e)}
        />
      </label>
      <label htmlFor="date">
        Date of birth
        <input
          type="date"
          name="date"
          value={state.date}
          onChange={(e) => {
            onChangeHandler(e);
          }}
          required
        />
      </label>

      <label htmlFor="sex" required>
        Sex
        <select
          name="sex"
          value={state.sex}
          required
          onChange={(e) => onChangeHandler(e)}
        >
          <option value=""> </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>

      <br />

      <span>Family status</span>
      <label htmlFor="single">
        single
        <input
          type="radio"
          name="familyStatus"
          id="single"
          required
          onChange={(e) => onChangeHandler(e)}
        />
      </label>
      <label htmlFor="married">
        married
        <input
          type="radio"
          name="familyStatus"
          id="married"
          onChange={(e) => {
            onChangeHandler(e);
          }}
        />
      </label>
      <br />
      <div className={css.agreement}>
        <span>I agree to the Terms of Service</span>
        <label htmlFor="agreement">
          <input
            name="agreement"
            type="checkbox"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </label>
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;

Form.propTypes = {
  addCard: PropTypes.func.isRequired,
  setShowMessage: PropTypes.func.isRequired,
};
