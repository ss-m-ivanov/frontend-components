import React from 'react';

const Button = (props) => {
    return (
        <>
            <button 
                className={props.type}
                id={props.id}
                onClick={props.callBack}
                value={props.value} >   
                {props.value}

            </button>
        </>
    );
}

export default Button;