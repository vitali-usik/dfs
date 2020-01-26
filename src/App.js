import React, { useState } from 'react';

import Matrix from './components/Matrix';
import Controls from './components/Controls';

import doDFS from './logic/bfs';

import logo from './logo.svg';

import './App.css';

const data = {
  graph1: [
    [0, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  graph2: [
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
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

const cm = [
  ['white', 'white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white', 'white'],
  ['white', 'white', 'white', 'white', 'white', 'white'],
];

function App() {
  const [adjMatrix, setAdjMatrix] = useState(data.graph1);
  const [colorMatrix, setColorMatrix] = useState(cm);
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

  const update = (key) => {
    colorMatrix[key[0]][key[2]] = 'green';
    const newColorMatrix = [...colorMatrix];
    setColorMatrix(newColorMatrix);
  };

  const onBFSClick = () => {
    const result = doDFS(adjMatrix, 0, {});

    Object.keys(result).forEach((key) => {
      console.log('key', key);
      update(key);
      // debugger
    })
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
          <Matrix adjMatrix={adjMatrix} colors={colorMatrix} />
        </div>
        <div>
          <button onClick={onBFSClick}>Поиск в глубину</button>
        </div>
      </header>
    </div>
  );
}

export default App;
