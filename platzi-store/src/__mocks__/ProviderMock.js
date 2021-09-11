import React from 'react';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import reducer from '../reducers';

import initialState from '../initialState';

const STORE = createStore(reducer, initialState);
const HISTORY = createBrowserHistory();

const ProviderMock = ({ children }) => (
  <Provider store={STORE}>
    <Router history={HISTORY}>
      {children}
    </Router>
  </Provider>
);

export default ProviderMock;
