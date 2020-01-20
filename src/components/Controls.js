import React from 'react';

import './../App.css';

const Controls = ({ onSizeChangeClick }) => {
  return (
    <div className="controls">
      <span className="form-row">
        <label className="label-heading">Тип графа</label>
        <label htmlFor="matrixType1">
          <input type="radio" id="matrixType1" name="type" value="1" /> Граф 1
        </label>
        <label htmlFor="matrixType2">
          <input type="radio" id="matrixType2" name="type" value="2" /> Граф 2
        </label>
        <label htmlFor="matrixType3">
          <input type="radio" id="matrixType3" name="type" value="3" /> Граф 3
        </label>
      </span>
      <span className="form-row">
        <label className="label-heading">Размер графа</label>
        <select onChange={(evt) => onSizeChangeClick(evt)}>
          <option value="6">6</option>
          <option value="5">5</option>
          <option value="4">4</option>
        </select>
      </span>
    </div>
  );
};

export default Controls;
