import { useState, useEffect } from "react";

// lovely custom hook.
// 09552ecbeb184118aed172805251702
const UseWeather = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=09552ecbeb184118aed172805251702&q=London&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(() => {
        console.log("error");
      });
  }, []); // 1. betolteskor fut le a komponens ures dependencia tomb
  return { data, isLoading }; // we need
};
export default UseWeather;
