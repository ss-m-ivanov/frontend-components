import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
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

  const normalizeValue = value => {
    if (value >= state.min && value <= state.max)
      return value;
    else if (value < state.min)
      return state.min;
    else
      return state.max;
  }

  const inputValue = event => {
    let value = event.target.value;
    if (/^\d+$/.test(value)) {
      value = normalizeValue(value);
      setState({min: state.min, max: state.max, value: value})
    }
    else {
        setState({min: state.min, max: state.max, value: state.min})
    }
  }

  return (
    <div className="count-selector d-flex flex-column align-items-center">
      <p>How many items do you want to get?</p>
      <label className="w-100" htmlFor="range"></label>
        <input type="range" id="range" min={state.min} max={state.max} step="1"
          value={state.value} onChange={rangeValue}/>
        <div className="w-25 my-1">
          <InputGroup>
            <FormControl aria-label="Filter"
              aria-describedby="Filter-data"
              value={state.value}
              onChange={inputValue} />
          </InputGroup>
        </div>
    </div>
    );
};

export default RangeSelector;
