import React from 'react';

import Matrix from './components/Matrix';

import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Matrix />
      </header>
    </div>
  );
}

export default App;
