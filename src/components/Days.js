import { useState } from 'react'
import Day from './Day'


const Days = ({ days }) => {
    return ( 
      <>
        {days.map((day)=>(
            <Day day={day} />
        ))}
      </>
    )
  }
  
  export default Days