import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frontpage from "./frontpage";
import Settings from "./settings";
import Archive from "./archive";
import { useCookies } from "react-cookie";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
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
