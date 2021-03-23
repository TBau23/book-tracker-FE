import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Login from './Components/Login';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <Header />
      <h2>Stack Tracker</h2>

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          {loggedIn ? <Dashboard /> : <LandingPage />}
        </Route>
        
      </Switch>
      

      
    </div>
  );
}

export default App;
