import React, { useState } from "react";
import axios from 'axios'
import "./index.css"
function App() {


  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=97d59f1df96386d76ff7cee48d051a87`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response)
      })
      setLocation('');
    }

  }
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyDown={searchLocation}
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}&deg;F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>

        {data.name != null &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold desc">{data.main.feels_like}&deg;F</p> : null}

              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold desc">{data.main.humidity}%</p> : null}

              <p className="desc">Humidity</p>
            </div>
            <div className="wind ">
              {data.wind ? <p className="bold desc">{data.wind.speed}MPH</p> : null}

              <p>Wind Speed</p>
            </div>
          </div>}

      </div>


    </div>
  );
}

export default App;
