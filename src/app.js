import React, { Component } from 'react';
import { render } from 'react-dom';

import 'normalize.css';

import AppRouter from 'routers/AppRouter';

const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};

export default App;

export default render(<App />, document.querySelector('#app'));
