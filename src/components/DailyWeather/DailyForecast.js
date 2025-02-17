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
        <h2>Weather in {data.location.name}</h2>
      )}{" "}
    </div>
  );
};
export default DailyForecast;
