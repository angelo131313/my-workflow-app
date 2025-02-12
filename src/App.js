import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FocusMode from './pages/FocusMode';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/focus" component={FocusMode} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;

