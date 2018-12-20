import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateCourse from './pages/CreateCourse';
import Home from './pages/Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/createcourse/" component={CreateCourse} />
    </Switch>
  </Router>
);

export default App;
