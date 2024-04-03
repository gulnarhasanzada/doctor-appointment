import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddModal = ({show, onHide, doctor, onAdd}) => {
  const [newAppt,setNewAppt] = useState({
    id: Math.floor(Math.random()*100000),
    patient: '',
    doctor: doctor.name,
    consulted: false,
    day: ''
  })  

  const handlePatient = (e)=>{
    setNewAppt({...newAppt, patient: e.target.value})
  }

  const handleDay = (e)=>{
    const dateObject = new Date(e.target.value);
    setNewAppt({...newAppt, day: dateObject})
  }

  const handleAdd = ()=>{
    onAdd(newAppt)
    onHide();
    setNewAppt({
        id: Math.floor(Math.random()*100000),
        patient: '',
        doctor: doctor.name,
        consulted: false,
        day: ''
      })
  }
  return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header  closeButton>
          <Modal.Title>Reservation for {doctor.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Patient Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name="patient" value={newAppt.patient}  onChange={handlePatient}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Day&Time</Form.Label>
                <Form.Control type="datetime-local" placeholder="mm/dd/yyyy" name="day"   onChange={handleDay}/>
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default AddModal
