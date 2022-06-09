import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Frontpage from "./frontpage";
import Settings from "./settings";
import Archive from "./archive";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <Link to="/">Back</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/archive">Archive</Link>
        </nav>
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
