import "./app.css";
import Search from "./Search";
import Overview from "./Overview";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Weather">
        <Search />
        <Overview />
        <Weather />
      </div>
    </div>
  );
}
