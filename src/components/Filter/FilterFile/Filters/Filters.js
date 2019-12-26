import React, {useState} from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import AccordionElement from './AccordionElement/AccordionElement';
import { store } from 'react-notifications-component';
import notificationObject from '../../../utils/Notification/Notification';
import axios from 'axios'


const Filters = props => {

    const [state, setState] = useState({
        values: {},
        method: '',
    });

    const makeRequest = (filters) => {
        axios({
            headers: {'Content-Type': 'form-data' },
            method: state.method,
            url: 'http://0.0.0.0:80/filtering/' + props.currentFileId,
            withCredentials: true,
            data: filters,
        })
            .then(response => {
                if (state.method === 'put') {
                    let filteringResult = response.data['result'];
                    console.log(filteringResult);
                    props.responseResult(filteringResult)
                }   else {
                    console.log('post success')
                }
            })
            .catch(error => {
              store.addNotification({
                ...notificationObject,
                title: "Error!",
                message: `${error}`,
                type: "danger"
              });
            });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        makeRequest(formData)
    };

    const changeMethod = (event, method) => {
        setState(prevState =>({
            ...prevState, method: method
        }));
    }

  return(
    <form onSubmit={handleSubmit} className="filters-field violet-frame bg-light w-100 h-100 p-3 overflow-auto">
      <h2 className="d-flex justify-content-center m-3">Filters</h2>
      <AccordionElement columns={props.columns} />
      <ButtonGroup aria-label="Filter menu" className="d-flex justify-content-center m-3">
        <Button variant="secondary">Home</Button>
        <Button variant="secondary" type="submit" onClick={event => changeMethod(event, 'post')}>Save</Button>
        <Button variant="secondary" type="submit" onClick={event => changeMethod(event, 'put')}>Filter</Button>
      </ButtonGroup>
    </form>
  );
};

export default Filters;
