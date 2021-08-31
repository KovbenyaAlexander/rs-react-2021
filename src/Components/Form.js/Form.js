import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';
import emailValivation from '../Services/FormServices';

const Form = ({ addCard, setShowMessage }) => {
  const initialState = {
    name: '',
    email: '',
    date: '',
    sex: '',
    family: '',
    isSingleChecked: false,
    isMarriedChecked: false,
    isAgree: false,
  };

  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});

    if (state.name.length < 4) {
      setErrors((prevState) => ({ ...prevState, name: true }));
    }
    if (!emailValivation(state.email)) {
      setErrors((prevState) => ({ ...prevState, email: true }));
    }
    if (!state.date) {
      setErrors((prevState) => ({ ...prevState, date: true }));
    }
    if (!state.sex) {
      setErrors((prevState) => ({ ...prevState, sex: true }));
    }
    if (!state.isAgree) {
      setErrors((prevState) => ({ ...prevState, agree: true }));
    }
    if (!state.family) {
      setErrors((prevState) => ({ ...prevState, family: true }));
    }
  }, [
    state.isAgree,
    state.email,
    state.sex,
    state.family,
    state.date,
    state.name,
  ]);

  const onChangeHandler = (e, familyStatusSwitcher) => {
    const typeOfInput = e.target.name;
    const newValue = e.target.value;

    if (typeOfInput === 'familyStatus') {
      const value = e.target.id;
      setState((prevState) => ({
        ...prevState,
        family: value,
        isSingleChecked: false,
        isMarriedChecked: false,
        [familyStatusSwitcher]: true,
      }));
      return;
    }

    if (typeOfInput === 'agreement') {
      setState((prevState) => ({ ...prevState, isAgree: !prevState.isAgree }));
      return;
    }

    setState((prevState) => ({
      ...prevState,
      [typeOfInput]: newValue,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      addCard(state);
      setState(initialState);
      setShowMessage(true);
    }
  };

  return (
    <form className={css.form} onSubmit={onSubmitHandler}>
      <label htmlFor="name">
        Name
        {errors.name ? (
          <span className={css.validationError}>*Required</span>
        ) : null}
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
        {errors.email ? (
          <span className={css.validationError}>*Required correct email</span>
        ) : null}
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
        {errors.date ? (
          <span className={css.validationError}>*Required</span>
        ) : null}
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
        {errors.sex ? (
          <span className={css.validationError}>*Required</span>
        ) : null}
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
      <div className={css.familyStatusWrapper}>
        <span>Family status</span>
        {errors.family ? (
          <span className={css.validationError}>*Required</span>
        ) : null}
      </div>
      <label htmlFor="single">
        single
        <input
          type="radio"
          name="familyStatus"
          id="single"
          required
          checked={state.isSingleChecked}
          onChange={(e) => onChangeHandler(e, 'isSingleChecked')}
        />
      </label>
      <label htmlFor="married">
        married
        <input
          type="radio"
          name="familyStatus"
          id="married"
          onChange={(e) => {
            onChangeHandler(e, 'isMarriedChecked');
          }}
          checked={state.isMarriedChecked}
        />
      </label>
      <br />
      <div className={css.agreement}>
        <span>I agree to the Terms of Service</span>
        {errors.agree ? (
          <span className={css.validationError}>*Required</span>
        ) : null}
        <label htmlFor="agreement">
          <input
            name="agreement"
            type="checkbox"
            checked={state.isAgree}
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
