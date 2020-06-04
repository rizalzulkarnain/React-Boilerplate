import React, { Component } from 'react';
import { render } from 'react-dom';

import AppRouter from 'routers/AppRouter';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

render(<App />, document.querySelector('#app'));
