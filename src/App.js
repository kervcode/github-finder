import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/users/Users';

const App = () => {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" icon="fab fa-github"/>
        <div className="container">
          <Users />
        </div>
      
      </div>
  );
}

export default App;
