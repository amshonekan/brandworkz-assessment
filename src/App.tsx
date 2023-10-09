import { useState } from 'react';
import './App.css';
import { WeatherResponse } from './types';

const API_KEY = '3e78d3e0d8e888d3ad1ace38f1df1ae1';

const App = () => {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [location, setLocation] = useState('');

  const onSearch = () => {
    console.log(location);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert(
              'There seems to be an error with the provided location'
            );
          }
          alert('An error has occurred');
          throw new Error('You have an error');
        }
      })
      .then((validResponse) => {
        setWeather({
          location: `${validResponse.name}, ${validResponse.sys.country}`,
          temperature: validResponse.main.temp,
          description: validResponse.weather[0].description,
          icon: validResponse.weather[0].icon,
          minMaxTemp: {
            min: validResponse.main.temp_min,
            max: validResponse.main.temp_max,
          },
        } as WeatherResponse);
        console.log(weather);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>A Simple Weather Application</h1>
      </header>
      <main>
        <div className="Search">
          <input
            className="search"
            type="text"
            placeholder="Enter a city"
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            className="submit"
            type="submit"
            name="Search"
            onClick={onSearch}
          />
        </div>
        <div className={weather ? 'Weather' : 'NoWeather'}>
          {weather ? (
            <div className="Weather-container">
              <div className="Weather-title">
                <h2>{weather.location}</h2>
                <img
                  alt=""
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                />
              </div>
              <h3>{`${Math.round(weather.temperature)}°C`}</h3>
              <p>{weather.description}</p>
              <p>{`Min: ${Math.round(
                weather.minMaxTemp.min
              )}°C | Max: ${Math.round(weather.minMaxTemp.max)}°C`}</p>
            </div>
          ) : (
            <h2>No location selected</h2>
          )}
        </div>
      </main>
      <footer>Created by A. Shonekan</footer>
    </div>
  );
};

export default App;
