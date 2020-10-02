import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import 'tachyons';

import App from './containers/App';
import { requestPokemon, searchPokemon } from './reducers/reducers';

import './index.css';

const queryCache = new QueryCache();

const logger = createLogger();

const rootReducers = combineReducers({ requestPokemon, searchPokemon });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <Provider store={store}>
      <App />
    </Provider>
    <ReactQueryDevtools />
  </ReactQueryCacheProvider>,
  document.getElementById('root')
);
