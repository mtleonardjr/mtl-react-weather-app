import { useState } from 'react'

const Search = ({ onSearch }) => {
  const [zip, setZip] = useState('85016')

  const onSubmit = (e) => {
    e.preventDefault()
    if(!zip) {
      alert('Please enter a zip code')
      return
    }

    onSearch({ zip })
    setZip('')

  }

  return (
    <form className='search' onSubmit={onSubmit}>
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