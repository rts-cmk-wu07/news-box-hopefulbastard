import { useState, useEffect } from "react";

const Darkmode = () => {
  const [isdarkmodeActive, setdarkmodeActive] = useState(() => {
    const DarkmodeData = localStorage.getItem("isdarkmodeActive");
    return DarkmodeData ? JSON.parse(DarkmodeData) : [];
  });

  function darkmode() {
    setdarkmodeActive(!isdarkmodeActive);
    window.location.reload();
  }

  useEffect(() => {
    localStorage.setItem("isdarkmodeActive", JSON.stringify(isdarkmodeActive));
  }, [isdarkmodeActive]);

  return (
    <p className="darkmodetoggle" onClick={darkmode}>
      TOGGLE DARK MODE
    </p>
  );
};

export default Darkmode;
