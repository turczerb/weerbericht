import React, { useState, useEffect } from "react";
import UseWeather from "../Hooks/UseWeather"; // this is my custom hook.

const DailyForecast = () => {
  const [city, setCity] = useState("Budapest"); // Kezdeti város

  // URLs generálása a város alapján
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const newUrls = [
      `https://api.weatherapi.com/v1/current.json?key=09552ecbeb184118aed172805251702&q=${city}&aqi=no`,
      `https://api.weatherapi.com/v1/forecast.json?key=09552ecbeb184118aed172805251702&q=${city}&days=2&aqi=no&alerts=no`,
      `https://api.weatherapi.com/v1/alerts.json?key=09552ecbeb184118aed172805251702&q=${city}&aqi=no`,
      `https://api.weatherapi.com/v1/astronomy.json?key=09552ecbeb184118aed172805251702&q=${city}&aqi=no`,
    ];
    setUrls(newUrls);
  }, [city]); // Figyeljük a 'city' változását, nem a teljes URLs tömböt

  const { data, loading, error } = UseWeather(urls);
  console.log("Weather data:", data);

  return <div></div>;
};
export default DailyForecast;
