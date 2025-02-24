import UseWeather from "../Hooks/UseWesther"; // this is my custom hook.

const DailyForecast = () => {
  const { data, isLoading } = UseWeather();
  console.log("z a data" + data);

  return (
    <div>
      {" "}
      {isLoading ? (
        <p>Loading weather data...</p>
      ) : (
        <div>
          <h1>Daily weather</h1>

          <h2>{data.location.name}</h2>
          <h2>{data.location.region}</h2>
          <h2> {data.location.localtime}</h2>
          <h2> {data.current.temp_c}</h2>
          <h2> {data.current.feelslike_c}</h2>
          <img src={data.current.condition.icon} alt="Weather Icon"></img>
          <h2>{data.current.condition.text}</h2>
          <h2>{data.current.wind_kph} k/ph</h2>
          <h2> {data.current.humidity}</h2>
          <h2> {data.current.uv}</h2>
        </div>
      )}{" "}
    </div>
  );
};
export default DailyForecast;
