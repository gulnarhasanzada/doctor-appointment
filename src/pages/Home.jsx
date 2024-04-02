import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Doctors from '../components/Doctors';

const Home = () => {
  return (
    <Container>
        <Row className='text-center my-3'>
            <h1 className='header-title text-uppercase'>Clarus Hospital</h1>
        </Row>
        <Row className='d-flex flex-row flex-wrap justify-content-center g-3'>
            <Doctors/>    
        </Row>      
    </Container>
  )
}

export default Home
