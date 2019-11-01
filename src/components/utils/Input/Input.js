import React from 'react';

import './Input.css'

const Input = (props) => {
    return (

        <div className="form-group">
            <input
                id={props.name}
                className="form-control form-input bg-light"
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
                onKeyDown={props.disableSpaces}
            />
            <small className="form-text text-muted text-center" id="errorMessage">{props.errorMessage}</small>
        </div>



    );
}

export default Input;