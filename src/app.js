import React, { Component } from 'react';
import { render } from 'react-dom';

import 'normalize.css';

import AppRouter from 'routers/AppRouter';

export default function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

render(<App />, document.querySelector('#app'));
