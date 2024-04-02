import React from 'react'
import Appointment from './Appointment'

const AppointmentList = ({apptList, onDelete, onUpdate}) => {


  return (
    <>
    {apptList.map(item=><Appointment key={item.id} appt={item} onDelete={onDelete} onUpdate={onUpdate}/>)}
    </>
  )
}

export default AppointmentList
