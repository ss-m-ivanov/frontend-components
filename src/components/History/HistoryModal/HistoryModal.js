import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const HistoryModal = props => {
  console.log(props.filter);
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.keys(props.filter).map(key => (
            <div>
              <p className="text-center h4">{key}</p>
              {Object.keys(props.filter[key]).map(order => {
                const value = props.filter[key][order]['value'];
                const count = props.filter[key][order]['count'];
                return (<p>{`${value ? `Value: ${value}` : ''} ${count ? `Count: ${count}` : ''}`}</p>)
              })}
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HistoryModal;
