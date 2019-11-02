import React from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

const EditProfileModal = props => {

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profile editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
          <FormControl aria-label="Name"
            placeholder="Name"
            aria-describedby="Name-data"
            value={props.userName}
            onChange={props.handleChangeName} />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl aria-label="Surname"
            placeholder="Surname"
            aria-describedby="Surname-data"
            value={props.userSurname}
            onChange={props.handleChangeSurname} />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl aria-label="Email"
            placeholder="Email"
            aria-describedby="Email-data"
            value={props.userEmail}
            onChange={props.handleChangeEmail} />
        </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProfileModal;
