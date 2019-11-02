import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import CheckBox from './CheckBox/CheckBox';


const CheckBoxes = props => {

  const [state, setState] = useState({
      values: props.values.map(value => {return {value: value, status: false}}),
      filter: ''
  });

const filterFilters = event => {
    setState({values: state.values, filter: event.target.value})
};

const checkBoxClicked = value => {
    const checkBox = state.values.map(object => object.value === value ?
      {value: object.value, status: !object.status} : object);
        setState({values: checkBox, filter: state.filter})
  }

  return(
    <div>
      <InputGroup className="mb-3">
        <FormControl aria-label="Filter"
          aria-describedby="Filter-data"
          onChange={filterFilters} />
        </InputGroup>
        {state.values.filter(object => object.value.startsWith(state.filter)).map(object => {
          return (<CheckBox value={object.value} status={object.status} checkBoxClicked={checkBoxClicked}/>)
        } )}
    </div>
  );
};

export default CheckBoxes;
