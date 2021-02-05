
const Day = ({ day }) => {

    return (
    <div className='day'>
        <div className ='date'>{day.date}</div>
        <div className='weather'>{day.weather}</div>

        <div className='bottom'>
        <span className='left'>{day.temp2m.min}</span>
        <span className='right'>{day.temp2m.max}</span>
        </div>
    </div>
    
    )
  }
  
  export default Day