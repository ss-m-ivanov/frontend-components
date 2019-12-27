import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FileManipulationModal = props => {

  return (
    <div>
      <Modal show={props.open} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>What do you want to do with this file?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-6 text-center">
            <button onClick={event => props.restoreFile(props.file_id, props.filter_id)}>Download it!</button>
          </div>
          <div className="col-6 text-center">
            <button>Send it!</button>
          </div>
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

export default FileManipulationModal;
