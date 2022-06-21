import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Frontpage from "./frontpage";
import Settings from "./settings";
import Archive from "./archive";
import { useSwipeable } from "react-swipeable";
import useLocalStorage from "use-local-storage";

function App() {
  const refreshswipe = useSwipeable({
    onSwipedDown: () => window.location.reload(),
    swipeDuration: 250,
  });

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const darkmode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(theme);
  };

  return (
    <BrowserRouter>
      <div className="app" {...refreshswipe} data-theme={theme}>
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
