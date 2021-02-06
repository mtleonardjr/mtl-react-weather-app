import { useState, useEffect } from 'react'
import Header from './components/Header'
import Days from './components/Days'
import Search from './components/Search'

function App() {

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
        <Days />  
      </div>
      <div className='search-container'>
        <Search />
      </div>

    </div>
  );
}

export default App;
