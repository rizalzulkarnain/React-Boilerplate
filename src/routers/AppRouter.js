import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from 'components/HomePage';
import AboutPage from 'components/About';

const AppRouter = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  </>
);
export default AppRouter;
