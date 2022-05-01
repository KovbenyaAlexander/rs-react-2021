import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import App from './App.js';

import './index.less';

const store = createStore(reducer, applyMiddleware(thunk));
render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
