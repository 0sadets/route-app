import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cheops from "./components/Cheops";
import HangingGardens from "./components/HangingGardens";
import TempleOfArtemis from "./components/TempleOfArtemis";
import Zevs from "./components/Zevs";
import Mausoleum from "./components/Mausoleum";
import Colossus from "./components/Colossus";
import Lighthouse from "./components/Lighthouse";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Routes>
        <Route path="/Cheops" element={<Cheops />} />
        <Route path="/HangingGardens" element={<HangingGardens />} />
        <Route path="/TempleOfArtemis" element={<TempleOfArtemis />} />
        <Route path="/Zevs" element={<Zevs />} />
        <Route path="/Mausoleum" element={<Mausoleum />} />
        <Route path="/Colossus" element={<Colossus />} />
        <Route path="/Lighthouse" element={<Lighthouse />} />






      </Routes>
    </div>
  );
}

export default App;
