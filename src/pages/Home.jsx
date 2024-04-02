import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Doctors from '../components/Doctors';
import {appointmentData} from '../helper/data'
import AppointmentList from '../components/AppointmentList';

const Home = () => {
  const [apptList, setApptList] = useState(appointmentData);

  const addAppt = (appt)=>{
    const temp = apptList;
    temp.push(appt);
    setApptList(temp);
  }
  const deleteAppt = (id)=>{
    let temp = apptList;
    temp = temp.filter(item=>item.id!==id)
    setApptList(temp);
  }

  const updateAppt = (id)=>{
    
    let temp = [...apptList];
    const index = temp.findIndex(item=>item.id===id)
    temp[index].consulted = !temp[index].consulted;
    console.log(temp)
    setApptList(temp);
  }

  return (
    <Container>
        <Row className='text-center my-3'>
            <h1 className='header-title text-uppercase'>Clarus Hospital</h1>
        </Row>
        <Row>
            <Doctors/>    
        </Row>
        <Row>
            <AppointmentList apptList={apptList} onDelete={deleteAppt} onUpdate={updateAppt}/>  
        </Row>      
    </Container>
  )
}

export default Home
