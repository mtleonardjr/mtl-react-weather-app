# mtl-react-weather-app

This is the front-end for mtl-weather-microservice.

## APIs Consumed

    "mtl-react-weather-app" - POST: http://localhost:5003/weather

## API Details

```
POST: http://localhost:5003/weather
```

Request body

```json
{
  "zip": "21218"
}
```

Response

```json
{
  "status": "success",
  "msg": [
    {
      "date": "Feb 9, 2021",
      "weather": "cloudy",
      "temp2m": {
        "max": 5,
        "min": 0
      },
      "wind10m_max": 3,
      "day": "Tuesday"
    },
    {
      "date": "Feb 10, 2021",
      "weather": "cloudy",
      "temp2m": {
        "max": 1,
        "min": -2
      },
      "wind10m_max": 2,
      "day": "Wednesday"
    },
    {
      "date": "Feb 11, 2021",
      "weather": "lightsnow",
      "temp2m": {
        "max": -1,
        "min": -3
      },
      "wind10m_max": 3,
      "day": "Thursday"
    },
    {
      "date": "Feb 12, 2021",
      "weather": "snow",
      "temp2m": {
        "max": -1,
        "min": -6
      },
      "wind10m_max": 3,
      "day": "Friday"
    },
    {
      "date": "Feb 13, 2021",
      "weather": "cloudy",
      "temp2m": {
        "max": -2,
        "min": -8
      },
      "wind10m_max": 3,
      "day": "Saturday"
    },
    {
      "date": "Feb 14, 2021",
      "weather": "rain",
      "temp2m": {
        "max": 2,
        "min": -7
      },
      "wind10m_max": 3,
      "day": "Sunday"
    },
    {
      "date": "Feb 15, 2021",
      "weather": "clear",
      "temp2m": {
        "max": -7,
        "min": -16
      },
      "wind10m_max": 3,
      "day": "Monday"
    }
  ]
}
```
