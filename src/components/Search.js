import { useState } from 'react'

const Search = () => {
  const [zip, setZip] = useState('85016')

    return (
      <form className='search'>
        <label>Zip Code:</label>
        <input 
          type='Text' 
          placeholder='85016' 
          value={zip} 
          onChange= {(e) => setZip(e.target.value)}></input>
        <input type='submit' className='btn'></input>
      </form>
    )
  }
  
  export default Search