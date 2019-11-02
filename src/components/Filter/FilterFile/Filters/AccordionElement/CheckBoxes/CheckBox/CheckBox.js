import React from 'react';
import { Form } from 'react-bootstrap';


const CheckBox = props => {
  return(
    <div key={props.value} className="mb-3">
      <Form.Check type='checkbox' id={props.value}
        label={props.value}  checked={props.status}
        onChange={() => props.checkBoxClicked(props.value)} />
    </div>
  );
};

export default CheckBox;
