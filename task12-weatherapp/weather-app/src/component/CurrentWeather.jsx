
const CurrentWeather = ({ data }) => {
    return (
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p>Temperature: {data.main.temp} °C</p>
        <p>Condition: {data.weather[0].description}</p>
        <p>Humidity: {data.main.humidity} %</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
      </div>
    );
  };
  
  export default CurrentWeather;
  