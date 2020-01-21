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
  graph2: [
    [0, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  graph3: [
    [0, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0],
  ]
};

function App() {
  const [adjMatrix, setAdjMatrix] = useState(data.graph1);
  const [selectedMatrixInd, setSelectedMatrixInd] = useState(0);
  const [size, setSize] = useState(6);

  const onSizeChangeClick = ({ target: { value } }) => {
    const valueNum = Number(value);
    let newMatrix = [];

    data.graph1.forEach((item, i) => {
      if (i < valueNum) {
        newMatrix.push(item.slice(0, valueNum));
      }
    });

    setSize(value);

    setAdjMatrix(newMatrix);
  };

  const onMatrixChange = (matrixInd) => {
    setSelectedMatrixInd(matrixInd);
    setAdjMatrix(data[`graph${matrixInd + 1}`]);
    setSize(6);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Content-wrapper">
          <Controls
            size={size}
            selectedMatrixInd={selectedMatrixInd}
            onSizeChangeClick={onSizeChangeClick}
            onMatrixChange={onMatrixChange}
          />
          <Matrix adjMatrix={adjMatrix} />
        </div>
      </header>
    </div>
  );
}

export default App;
