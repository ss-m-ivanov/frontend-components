import React, {useState} from 'react';
import Input from "../../../../../../utils/Input/Input";

const PairInput = props => {
    const [state, setState] = useState({
        value: '',
        count: ''
    });

    const changeValue = event => {
        const currentValue = event.target.value;

        setState(prevState => ({
            ...prevState, value: currentValue
        }))
    };

    const changeCount = event => {
        const currentCount = event.target.value;

        setState(prevState => ({
            ...prevState, count: currentCount
        }))
    };

    return (
        <div>
            <Input
                type="text"
                value={state.value}
                handleChange={changeValue}
                placeholder="value: "
                name={`${props.headerName}${props.ind}_value`}
                className="m-2"
            />
            <Input
                type="text"
                value={state.count}
                handleChange={changeCount}
                placeholder="count: "
                name={`${props.headerName}${props.ind}_count`}
                className="m-2"
            />
        </div>
    )
};

export default PairInput;