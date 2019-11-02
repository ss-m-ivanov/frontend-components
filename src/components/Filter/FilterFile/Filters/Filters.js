import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import AccordionElement from './AccordionElement/AccordionElement';
import RangeSelector from './RangeSelector/RangeSelector';

const Filters = props => {

  return(
    <div className="filters-field violet-frame bg-light w-100 h-100 p-3 overflow-auto">
      <h2 className="d-flex justify-content-center m-3">Filters</h2>
      <RangeSelector />
      <AccordionElement uniqueData={props.uniqueData} />
      <ButtonGroup aria-label="Filter menu" className="d-flex justify-content-center m-3">
        <Button variant="secondary">Home</Button>
        <Button variant="secondary">Filter</Button>
        <Button variant="secondary">Save</Button>
      </ButtonGroup>
    </div>
  );
};

export default Filters;
