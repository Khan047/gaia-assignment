// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPages';
import LoginPage from './pages/LoginPages';

function App() {
  return (
    <Router>
      <Switch>
        {/* Route for the Registration Page */}
        <Route exact path="/register">
          <RegistrationPage />
        </Route>

        {/* Route for the Login Page */}
        <Route exact path="/login">
          <LoginPage />
        </Route>

        {/* Default Route or 404 Page */}
        {/* Add a default route or 404 page if needed */}
      </Switch>
    </Router>
  );
}

export default App;
