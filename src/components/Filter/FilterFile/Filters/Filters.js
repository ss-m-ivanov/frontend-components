import React, {useState} from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import AccordionElement from './AccordionElement/AccordionElement';
import axios from 'axios'


const Filters = props => {

    const [state, setState] = useState({
        values: {},
        method: '',
    });

    const makeRequest = (filters) => {
        axios({
            headers: {'Content-Type': 'form-data' },
            method: 'put',
            url: 'http://0.0.0.0:80/filtering/' + props.currentFileId,
            data: filters,
        })
            .then(response => {
                let filteringResult = response.data['result'];
                console.log(filteringResult);
                props.responseResult(filteringResult)
            });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        makeRequest(formData)
    };

  return(
    <form onSubmit={handleSubmit} className="filters-field violet-frame bg-light w-100 h-100 p-3 overflow-auto">
      <h2 className="d-flex justify-content-center m-3">Filters</h2>
      <AccordionElement columns={props.columns} />
      <ButtonGroup aria-label="Filter menu" className="d-flex justify-content-center m-3">
        <Button variant="secondary">Home</Button>
        <Button variant="secondary">Save</Button>
        <Button variant="secondary" type="submit">Filter</Button>
      </ButtonGroup>
    </form>
  );
};

export default Filters;
