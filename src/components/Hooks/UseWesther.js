import { useState, useEffect } from "react";

// lovely custom hook.
// here is my api key 09552ecbeb184118aed172805251702
const UseWeather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=09552ecbeb184118aed172805251702&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []); // 1. betolteskor fut le a komponens ures dependencia tomb

  return data; // we need the data back real custom hook makes it
};
export default UseWeather;
