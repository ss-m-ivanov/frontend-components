import React, { useState } from 'react';
import './RangeSelector.css';

const RangeSelector = () => {
  const [state, setState] = useState({
    min: 1,
    max: 50,
    value: 1
  });

  const rangeValue = event => {
    setState({min: state.min, max: state.max, value: event.target.value})
  };

  return (
    <div className="count-selector d-flex flex-column align-items-center">
      <p>How many items do you want to get?</p>
      <label className="w-100" for="range"></label>
        <input type="range" id="range" min={state.min} max={state.max} step="1"
          value={state.value} onChange={rangeValue}/>
      <output for="range" class="output">{state.value}</output>
    </div>
    );
};

export default RangeSelector;
