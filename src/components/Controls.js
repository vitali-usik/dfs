import React from 'react';

import './../App.css';

const Controls = ({ size, selectedMatrixInd, onSizeChangeClick, onMatrixChange }) => {
  return (
    <div className="controls">
      <span className="form-row">
        <label className="label-heading">Тип графа</label>
        <label htmlFor="matrixType1">
          <input
            type="radio"
            id="matrixType1"
            name="type"
            value="0"
            onChange={() => onMatrixChange(0)}
            checked={selectedMatrixInd === 0}
          /> Граф 1
        </label>
        <label htmlFor="matrixType2">
          <input
            type="radio"
            id="matrixType2"
            name="type"
            value="1"
            onChange={() => onMatrixChange(1)}
            checked={selectedMatrixInd === 1}
          /> Граф 2
        </label>
        <label htmlFor="matrixType3">
          <input
            type="radio"
            id="matrixType3"
            name="type"
            value="2"
            onChange={() => onMatrixChange(2)}
            checked={selectedMatrixInd === 2}
          /> Граф 3
        </label>
      </span>
      <span className="form-row">
        <label className="label-heading">Размер графа</label>
        <select value={size} onChange={(evt) => onSizeChangeClick(evt)}>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
        </select>
      </span>
    </div>
  );
};

export default Controls;
