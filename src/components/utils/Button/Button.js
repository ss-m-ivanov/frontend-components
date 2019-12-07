import React from 'react';

const Button = props => {
    return (
        <>
            <button
                id={props.id}
                type={'button'}
                onClick={props.addFields}
                value={props.value}>
                {props.value}

            </button>
        </>
    );
};

export default Button;