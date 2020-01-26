import React from 'react';

import '../App.css';

const Matrix = ({ adjMatrix }) => {
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
            <td className="bold">{rowInd}</td>
            {row.map((item, itemInd) => (
              <td key={`${item}${itemInd}`} id={`${rowInd}-${itemInd}`}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Matrix;
