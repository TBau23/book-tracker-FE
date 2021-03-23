import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const {isAuthenticated, isLoading} = useAuth0();

  return (
    <div className="App">
      <Header />
      <h2>Stack Tracker</h2>

      <Switch>
        
        <Route path='/'>
          {isAuthenticated ? <Dashboard /> : <LandingPage />}
        </Route>
        
      </Switch>
      

      
    </div>
  );
}

export default App;
