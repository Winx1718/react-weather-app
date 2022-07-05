import "./App.css";
import Search from "./Search";
import Overview from "./Overview";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="Weather">
        <Search />
        <Overview />
        <Weather />
        <Forecast />
      </div>
    </div>
  );
}
