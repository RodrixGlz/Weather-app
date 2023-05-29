import { useState } from 'react'
import { Explorador } from './componets/Explorador'

import './App.css'
import './Global.css'
import './Card.css'

function App() {
  const [ciudades, setCiudades] = useState([])
  const [explorador, setExplorador] = useState(' ')

  const pedirApi = async (ciudad) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${ciudad}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ee49666199mshddfe0ec3e78793ep11d5aejsn81acd6240afa',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const newCiudad = result;
      setCiudades([newCiudad, ...ciudades])
    } catch (error) {
      console.error(error);
    }
}

return (
    <>
      
      <div class="container">
        <header>
          <Explorador explorador={explorador} setExplorador={setExplorador} pedirApi={pedirApi}/>
        </header>
        <main class="container-card">
          { ciudades.map( (ciudad)=>{ return <article class='card' key={ciudad.location.tz_id}>
            <div class="top-card">
              <div class="card-elements-icon">
                <img src={`http:${ciudad.current.condition.icon}`} alt="icon weather api"/>
              </div>
              <div class="card-elements-data">
                <p class="card-elements-data-condition">{ciudad.current.condition.text}</p>
                <p class="card-elements-data-temp">{ciudad.current.temp_c}<spam>°</spam></p>
                <p class="card-elements-data-city">{ciudad.location.name},{ciudad.location.region},{ciudad.location.country}</p>
              </div>
            </div>
            <div class="bottom-card">
              <p class="bottom-card-data-wind">
                Wind: <span>{ciudad.current.wind_kph},{ciudad.current.wind_dir} km/h</span>
              </p>
              <p class="bottom-card-data-humidity">
                Humidity: <span>{ciudad.current.humidity}%</span>
              </p>
              <p class="bottom-card-data-pressure">
                Pressure: <span>{ciudad.current.pressure_in}%</span>
              </p>
            </div>
          </article>})}
        </main>
        <div>
        </div>
      </div>
    </>
  )
}

export default App