import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const HistoryModal = props => {

  const getNonEmptyKeys = () => {
    const nonEmptyKeys = Object.keys(props.filter).filter(key => {
      const nonEmptyValues = Object.keys(props.filter[key]).filter(order => {
      const value = props.filter[key][order]['value'];
      const count = props.filter[key][order]['count'];
      return (value && count) ? true : false;
    });
    return (nonEmptyValues.length) ? true : false;
  });
    return nonEmptyKeys;
  }

  const nonEmptyKeys = getNonEmptyKeys();

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        {nonEmptyKeys.map(key => (
          <div className="w-100 h-100 overflow-auto">
            <p className="h4">{key}:</p>
            {Object.keys(props.filter[key]).map(order => {
              const value = props.filter[key][order]['value'];
              const count = props.filter[key][order]['count'];
              if (value && count) {
                return (<p>{`${value ? `Value: ${value}` : ''} ${count ? `Count: ${count}` : ''}`}</p>)
              }
              return null
            })}
          </div>
        ))}
        </div>
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
