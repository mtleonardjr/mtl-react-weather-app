import { useState, useEffect } from 'react'
import Header from './components/Header'
import Days from './components/Days'
import Search from './components/Search'

function App() {

  const [zip, setZip] = useState('')
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

  const searchZip = (zip) => {
    console.log(zip)
  }

  //get weather route
  const getWeather = async (zip) => {
    const res = await fetch('http://localhost:5000/' + zip)
    const data = await res.json()

    return data
  }


  return (
    <div className="container">
      <Header />
      <div className='day-container'>
        <Days days={days}/>  
      </div>
      <div className='search-container'>
        <Search onSearch={searchZip}/>
      </div>

    </div>
  );
}

export default App;
