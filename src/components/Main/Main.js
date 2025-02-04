import NavBar from "../NavBar/NavBar";
import DailyForecast from "../DailyWeather/DailyForecast";

// ez lesz meghívva az app.js-be
const Main = () => {
  return (
    <div>
      <div>midnenkit meghívok dee</div>
      <div>
        <NavBar />
        <DailyForecast />
      </div>
    </div>
  );
};

export default Main;
