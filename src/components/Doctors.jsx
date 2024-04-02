import React from 'react'
import {doctorData} from '../helper/data'
import Doctor from './Doctor'

const Doctors = () => {
  return (
    <>
      <h2 className='text-center'>Our Doctors</h2>
      {doctorData.map(doctor=><Doctor key ={doctor.id} {...doctor}/>)}
    </>
  )
}

export default Doctors
