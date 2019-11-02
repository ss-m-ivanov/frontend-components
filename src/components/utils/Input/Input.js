import React from 'react';
import './Input.css'

const Input = (props) => {
    return (
        <div className="form-group">
            <input
                id={props.name}
                className="form-control custom-input-form bg-light my-4"
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                onKeyDown={props.disableSpaces}/>
        </div>
    );
}

export default Input;
