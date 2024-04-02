import React from 'react'
import {doctorData} from '../helper/data'
import Doctor from './Doctor'
import Row from 'react-bootstrap/Row';

const Doctors = () => {
  return (
    <>
      <h2 className='text-center'>Our Doctors</h2>
      <Row className='d-flex flex-row flex-wrap justify-content-center g-3'>
          {doctorData.map(doctor=><Doctor key ={doctor.id} doctor={doctor}/>)}
      </Row>
    </>
  )
}

export default Doctors
