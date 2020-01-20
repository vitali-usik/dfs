import React, { useState } from 'react';

import Matrix from './components/Matrix';
import Controls from './components/Controls';

import logo from './logo.svg';

import './App.css';

const data = {
  graph1: [
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
  ],
};

function App() {
  const [adjMatrix, setAdjMatrix] = useState(data.graph1);

  const onSizeChangeClick = ({ target: { value } }) => {
    const valueNum = Number(value);
    let newMatrix = [];

    data.graph1.forEach((item, i) => {
      if (i < valueNum) {
        newMatrix.push(item.slice(0, valueNum));
      }
    });

    setAdjMatrix(newMatrix);
    console.log('newMatrix2', newMatrix);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Content-wrapper">
          <Controls onSizeChangeClick={onSizeChangeClick} />
          <Matrix adjMatrix={adjMatrix} />
        </div>
      </header>
    </div>
  );
}

export default App;
