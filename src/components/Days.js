import Day from './Day'

const Days = ({ days }) => {
    return ( 
      <>
        {days.map((day)=>(
            <Day day={day} key={day.date}/>
        ))}
      </>
    )
  }
  
  export default Days