import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCourse from './pages/CreateCourse';
import Index from './pages/Index';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/createcourse/" component={CreateCourse} />
    </Switch>
  </Router>
);

export default App;
