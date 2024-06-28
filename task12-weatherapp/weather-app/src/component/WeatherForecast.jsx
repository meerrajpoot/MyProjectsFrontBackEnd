const WeatherForecast = ({ data }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-2">5-Day Forecast</h2>
        <div className="grid grid-cols-5 gap-4">
          {data.list.map((forecast, index) => (
            <div key={index} className="border p-2 rounded">
              <p>{new Date(forecast.dt_txt).toLocaleDateString()}</p>
              <p>Temp: {forecast.main.temp} °C</p>
              <p>{forecast.weather[0].description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WeatherForecast;
  