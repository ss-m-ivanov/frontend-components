import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <>
            <button 
                id={props.id}
                onClick={props.callBack}
                value={props.value} >   
                {props.value}

            </button>
        </>
    );
}

export default Button;