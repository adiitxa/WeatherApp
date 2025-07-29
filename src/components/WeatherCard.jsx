import React from "react";

const WeatherCard = ({ data }) => {
  const { name, main, weather, wind } = data;
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
      <p>{weather[0].description}</p>
      <p>🌡️ Temp: {main.temp} °C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>🌬️ Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
