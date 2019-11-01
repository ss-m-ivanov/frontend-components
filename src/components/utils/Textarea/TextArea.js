import React from 'react';
import './TextArea.css';


const TextArea = (props) => {
    return (

        <div className="form-group">
            <textarea
                id={props.name}
                className="form-control form-input "
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
            <small className="form-text text-muted" id="errorMessage">{props.errorMessage}</small>
        </div>



    );
};

export default TextArea;