import React from 'react';
import PropTypes from 'prop-types';
import css from './Message.module.css';

const Message = ({ isShowMessage }) => (
  <div className={css.messageContainer}>
    {isShowMessage ? (
      <p className={css.message}>Your data has been added!</p>
    ) : null}
  </div>
);

export default Message;

Message.propTypes = {
  isShowMessage: PropTypes.bool.isRequired,
};
