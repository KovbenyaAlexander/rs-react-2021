import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import App from './App.js';

import './index.less';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

// const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
