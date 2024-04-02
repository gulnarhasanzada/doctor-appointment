import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddModal = ({show, onHide, doctor}) => {

  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header  closeButton>
          <Modal.Title>Reservation for {doctor.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="patientName"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Day&Time</Form.Label>
                <Form.Control type="datetime-local" placeholder="mm/dd/yyyy" name="dayTime"/>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddModal
