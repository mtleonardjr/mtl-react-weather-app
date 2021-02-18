import { useState, useEffect } from 'react'
import Header from './components/Header'
import Days from './components/Days'
import Search from './components/Search'

function App() {
  const [days, setDays] = useState([])

  //Runs "21218" on load
  useEffect(()=>{
    getWeather({zip: "21218"});
  },[])

  //get weather route
  const getWeather = async (zip) => {
    console.log(zip)
    const res = await fetch('http://localhost:5003/weather', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(zip),
    })
    const data = await res.json()
    setDays(data.msg)
  }

  return (
    <div className="container">
      <Header />
      <div className='day-container'>
        <Days days={days}/>  
      </div>
      <div className='search-container'>
        <Search onSearch={getWeather}/>
      </div>

    </div>

    //Second Front-end
    // <div className="app-container-2">
    //     <div className="app-banner-2">Banner</div>
    //     <div className="app-body-2">
    //         <div className='body-item'>body-item</div>
    //         <div className='body-main'>body-item</div>
    //         <div className='body-item'>body-item</div>
    //     </div>
    //     <div className="app-footer-2">Footer</div>
    // </div>
  );
}

export default App;
