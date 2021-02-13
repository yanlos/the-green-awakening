import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './Dashboard.js';

function App() {
  // TODO: Load leaderboard stats here
  useEffect(() => {
    console.log('loading stats');
  }, []);

  return (
    <div className="App">
      <Dashboard />

    </div>
  );
}

export default App;
