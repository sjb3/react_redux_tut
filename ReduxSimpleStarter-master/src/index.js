'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCieOvskTOPX3SJ6XMrGxWPlou_NcQzWCc';

/*
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/

const App = () => {
  return (
    <div>
      <h2>React!</h2>
      <SearchBar />

    </div>
)
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
  );
