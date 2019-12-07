import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

import FieldsetContent from "./Fieldset/FieldsetContent";

const AccordionElement = props => {
  return(
    <div>
      <Accordion className="m-3">
        {props.columns.map(column => {
          return(
           <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={column}>
               {column}
               </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={column}>
                <Card.Body>
                    <FieldsetContent headerName={column}/>
                </Card.Body>
            </Accordion.Collapse>
          </Card>
          )
        })}
       </Accordion>
    </div>
  );
};

export default AccordionElement;
