import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Frontpage from "./frontpage";
import Settings from "./settings";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Frontpage />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </BrowserRouter>
  );
}

export default App;
