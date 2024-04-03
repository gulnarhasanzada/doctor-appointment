import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import AddModal from './AddModal';

const Doctor = ({doctor, onAdd}) => {
  const {id, name, dep, img} = doctor;  

  const [show, setShow] = useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col>
        <Card style={{ width: '18rem' }} className='mx-2' onClick={handleShow}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{dep}</Card.Text>
        </Card.Body>
        </Card>
        <AddModal show={show} onHide={handleClose} doctor={doctor} onAdd={onAdd}/>
    </Col>
  )
}

export default Doctor
