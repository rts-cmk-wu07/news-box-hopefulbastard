import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frontpage from "./frontpage";
import Settings from "./settings";
import Archive from "./archive";
import { useSwipeable } from "react-swipeable";
import { useEffect, useState } from "react";

function App() {
  const [isdarkmodeActive, setdarkmodeActive] = useState(() => {
    const DarkmodeData = localStorage.getItem("isdarkmodeActive");
    return DarkmodeData ? JSON.parse(DarkmodeData) : [];
  });

  function darkmode() {
    setdarkmodeActive(!isdarkmodeActive);
  }

  useEffect(() => {
    localStorage.setItem("isdarkmodeActive", JSON.stringify(isdarkmodeActive));
  }, [isdarkmodeActive]);

  return (
    <BrowserRouter>
      <div className={isdarkmodeActive ? "dark-theme" : "light-theme"}>
        <Routes>
          <Route path="/" element={<Frontpage />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/archive" element={<Archive />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
