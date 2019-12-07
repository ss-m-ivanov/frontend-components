import React, {useState} from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import AccordionElement from './AccordionElement/AccordionElement';
import axios from 'axios'

let filter_data = 1;

export let GetFilterData = () => {
    if(filter_data !== undefined && filter_data !== null){
        return filter_data
    } else {
        return 'Yuo have no data here'
    }

};

const Filters = props => {

    const [state, setState] = useState({
        values: {},
        method: '',
    });

    const handleSubmit = event => {
        const formData = new FormData(event.target);
        const currentForm = {};

        event.preventDefault();

        for (let entry of formData.entries()) {
            currentForm[entry[0]] = entry[1]
        }

        console.log(currentForm);
        console.log('METHOD: ' + state.method);
        setState({
            values: currentForm
        });



        return axios({
            headers: {'Content-Type': 'form-data' },
            method: state.method,
            url: 'http://0.0.0.0:4100/filtering/1',
            data: formData,
        }).then(response => {console.log(response.data)})
            .then(res => filter_data=res)
    };



  return(
    <form onSubmit={handleSubmit} className="filters-field violet-frame bg-light w-100 h-100 p-3 overflow-auto">
      <h2 className="d-flex justify-content-center m-3">Filters</h2>
      <AccordionElement columns={props.columns} />
      <ButtonGroup aria-label="Filter menu" className="d-flex justify-content-center m-3">
        <Button variant="secondary">Home</Button>
        <Button variant="secondary">Save</Button>
        <button type={'submit'}
                onClick={(event) => {
                    setState({
                        method: 'put'
                    })
                }}
        >Filter</button>
      </ButtonGroup>
    </form>
  );
};

export default Filters;
