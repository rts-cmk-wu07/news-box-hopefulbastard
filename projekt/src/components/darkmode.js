import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

const Darkmode = () => {
  //darkmode settings

  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const darkmode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <p className="darkmodetoggle" onClick={darkmode}>
      TOGGLE DARK MODE
    </p>
  );
};

export default Darkmode;
