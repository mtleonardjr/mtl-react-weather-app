import { useState, useEffect } from 'react'
import Header from './components/Header'
import Days from './components/Days'

function App() {


  return (
    <div className="container">
      <Header />
      <div className='day-container'>
        <Days />  
      </div>
      <div>
        <p>
          This will be search component
        </p>
      </div>

    </div>
  );
}

export default App;
