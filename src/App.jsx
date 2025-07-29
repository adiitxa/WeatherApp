import { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard.jsx";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      setWeather(res.data);
      setError("");
    } catch (err) {
      setError("City not found");
      setWeather(null);
    }
  };

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
