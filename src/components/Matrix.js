import React from 'react';

import '../App.css';

const Matrix = () => {
  const adjMatrix = [
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
  ];

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {new Array(adjMatrix.length).fill(1).map((_, i) => <th key={`${_}${i}`}>{i}</th>)}
        </tr>
      </thead>
      <tbody>
        {adjMatrix.map((row, rowInd) => (
          <tr key={`${row}${rowInd}`}>
            <td className="bold">0</td>
            {row.map((item, itemInd) => (
              <td key={`${item}${itemInd}`}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Matrix;
