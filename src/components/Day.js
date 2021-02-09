import { WiDaySunny } from 'weather-icons-react';
import { WiCloudy } from 'weather-icons-react';
import { WiHumidity } from 'weather-icons-react';
import { WiRain } from 'weather-icons-react';
import { WiSnow } from 'weather-icons-react';
import { WiThunderstorm } from 'weather-icons-react';

const Day = ({ day }) => {
    function Icon(props) {
        const weather = props.weather;
        if(weather == "clear") {
            return <WiDaySunny size={32} color='#000' />; 
        }
        if(weather === 'pcloudy') {
            return <WiCloudy size={32} color='#000' />; 
        }
        if(weather === 'mcloudy') {
            return <WiCloudy size={32} color='#000' />; 
        }
        if(weather === 'cloudy') {
            return <WiCloudy size={32} color='#000' />; 
        }
        if(weather === 'humid') {
            return <WiHumidity size={32} color='#000' />; 
        }
        if(weather === 'lightrain') {
            return <WiRain size={32} color='#000' />; 
        }
        if(weather === 'oshower') {
            return <WiRain size={32} color='#000' />; 
        }
        if(weather === 'ishower') {
            return <WiRain size={32} color='#000' />; 
        }
        if(weather === 'lightsnow') {
            return <WiSnow size={32} color='#000' />; 
        }
        if(weather === 'rain') {
            return <WiRain size={32} color='#000' />; 
        }
        if(weather === 'snow') {
            return <WiSnow size={32} color='#000' />; 
        } 
        if(weather === 'rainsnow') {
            return <WiSnow size={32} color='#000' />; 
        }
        if(weather === 'ts') {
            return <WiThunderstorm size={32} color='#000' />; 
        }
        if(weather === 'tsrain') {
            return <WiThunderstorm size={32} color='#000' />; 
        }
        if(weather === '-9999') {
            return <WiDaySunny size={32} color='#000' />; 
        } else {
            return <WiDaySunny size={32} color='#000' />;
        }      
    }

    return (
    <div className='day'>
        <div className ='date'>{day.date}</div>
        <div className ='weather'><Icon weather={day.weather} /></div>

        <div className='bottom'>
        <span className='left'>{day.temp2m.min}&#8451;</span>
        <span className='right'>{day.temp2m.max}&#8451;</span>
        </div>
    </div>
    
    )
  }
  
  export default Day