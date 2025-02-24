import { useState, useEffect } from "react";

// lovely custom hook.
// 09552ecbeb184118aed172805251702
// fogad 1 parametert ami tomb lesz az osszes urlt tartalmazni fogja. ami kell api callhoz
const UseWeather = (urls) => {
  /*const [data, setData] = useState(null);
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
  */

  // promise.all using,
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Párhuzamos API hívások a Promise.all segítségével o tesz rola h 1szerre fussanak a hivasok, tombben adja vissya a valaszokat
        // , tombot hoz letre
        const responses = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );

        // Az összes válasz beállítása egy objektumba
        const responseData = {
          current: responses[0],
          forecast: responses[1],
          // astronomy: responses[2],
          //alerts: responses[3],
        };

        setData(responseData); //responseDatat beallitjuk data allapotba. ez tarolja az osszes api valszat
      } catch (err) {
        setError(err);
      } finally {
        // mindegy h sikeres volt e v sem a hivas a loading akkor is false ra tesszuk
        setLoading(false);
      }
    };

    fetchData(); // url valtozasra reagal?
  }, [urls]);

  return { data, loading, error };
};
export default UseWeather;
