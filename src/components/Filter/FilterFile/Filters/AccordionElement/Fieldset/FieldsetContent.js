import React, {useState} from 'react';
import PairInput from './PairInput/PairInput'

import Button from '../../../../../utils/Button/Button'



const FieldsetContent = props => {
    const [state, setState] = useState({
        counter: 1
    });

    const addFields = (event) => {
        setState({
            counter: state.counter += 1
        });
        console.log(state.counter)
    };

    return (
        <div>
            <fieldset className="p-3 d-flex justify-content-center text-center" >

                {[...Array(state.counter).keys()].map(counter => (<PairInput ind={counter + 1} headerName={props.headerName} />))}
                <div className='text-center'>
                    <Button addFields={addFields} value={'+'} />
                </div>
            </fieldset>
        </div>
    )
};

export default FieldsetContent;