import React from 'react'
import Card from 'react-bootstrap/Card';

const Doctor = ({id, name, dep, img}) => {
  return (
    <Card style={{ width: '18rem' }} className='mx-2'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{dep}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Doctor
