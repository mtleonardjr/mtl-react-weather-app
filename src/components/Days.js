import { useState } from 'react'
import Day from './Day'


const Days = () => {
    const [days, setDays] = useState([
        {
            "date": "Feb 5, 2021",
            "weather": "clear",
            "temp2m": {
                "max": 20,
                "min": 12
            },
            "wind10m_max": 3,
            "day": "Friday"
        },
        {
            "date": "Feb 6, 2021",
            "weather": "clear",
            "temp2m": {
                "max": 21,
                "min": 12
            },
            "wind10m_max": 2,
            "day": "Saturday"
        },
        {
            "date": "Feb 7, 2021",
            "weather": "clear",
            "temp2m": {
                "max": 21,
                "min": 14
            },
            "wind10m_max": 2,
            "day": "Sunday"
        },
        {
            "date": "Feb 8, 2021",
            "weather": "mcloudy",
            "temp2m": {
                "max": 22,
                "min": 14
            },
            "wind10m_max": 2,
            "day": "Monday"
        },
        {
            "date": "Feb 9, 2021",
            "weather": "clear",
            "temp2m": {
                "max": 22,
                "min": 15
            },
            "wind10m_max": 2,
            "day": "Tuesday"
        },
        {
            "date": "Feb 10, 2021",
            "weather": "clear",
            "temp2m": {
                "max": 22,
                "min": 15
            },
            "wind10m_max": 3,
            "day": "Wednesday"
        },
        {
            "date": "Feb 11, 2021",
            "weather": "oshower",
            "temp2m": {
                "max": 18,
                "min": 12
            },
            "wind10m_max": 3,
            "day": "Thursday"
        }
    ])

    return (
        
      <>
        {days.map((day)=>(
            <Day day={day} />
        ))}
      </>
    )
  }
  
  export default Days