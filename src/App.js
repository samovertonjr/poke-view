import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

import HomePage from './components/HomePage';

import 'tachyons';
import './index.css';

const queryCache = new QueryCache();

const App = () => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <HomePage />
      <ReactQueryDevtools />
    </ReactQueryCacheProvider>
  );
};

export default App;
