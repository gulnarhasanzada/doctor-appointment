import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const Appointment = ({appt, onDelete, onUpdate}) => {
    const handleDelete = ()=>{
        onDelete(appt.id)
    }

    const handleUpdate = (e)=>{
        if(e.target.name !=='deleteBtn'){
            onUpdate(appt.id)
        } 
    }

  return (
    <Row className='d-flex flex-row justify-content-between border border-1 p-2 my-3' onClick={handleUpdate}>
      <Col>
            <h3>{appt.patient}</h3>
            <h4>{appt.doctor}</h4>
      </Col>
      <Col>
        {appt.consulted && <span>Consulted</span>}
        <Col>
            <p>{appt.day.toLocaleString().split(',')[0]}</p>
            <p>{appt.day.toLocaleString().split(',')[1]}</p>
        </Col>
      </Col>
      <Col className="text-end">
        <button name="deleteBtn" type='button' className='btn btn-danger' onClick={handleDelete}>X</button>
      </Col> 
    </Row>
  )
}

export default Appointment
