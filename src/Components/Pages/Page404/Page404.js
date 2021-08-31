import React from 'react';
import css from './Page404.module.css';

const Page404 = () => (
  <div className={css.errorContainer}>
    <p className={css.errorMsg}>Error 404. Page not found.</p>
  </div>
);

export default Page404;
