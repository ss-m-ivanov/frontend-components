import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import CheckBoxes from './checkboxes/CheckBoxes';

const AccordionElement = props => {
  return(
    <div>
      <Accordion className="m-3">
        {props.uniqueData.map(object => {
          return(
           <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={object.name}>
               {object.name}
               </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={object.name}>
              <Card.Body>
                <CheckBoxes values={object.values} />
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
