import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";
import { useState, useEffect } from "react";
import Darkmode from "./components/darkmode";
import { useSwipeable, onSwipedDown } from "react-swipeable";

function Settings() {
  // Arts settings
  const [isartsActive, setartsActive] = useState(() => {
    const ArtsData = localStorage.getItem("isartsActive");
    return ArtsData ? JSON.parse(ArtsData) : [];
  });

  function artsslider() {
    setartsActive(!isartsActive);
  }

  useEffect(() => {
    localStorage.setItem("isartsActive", JSON.stringify(isartsActive));
  }, [isartsActive]);

  //Health settings
  const [ishealthActive, sethealthActive] = useState(() => {
    const healthData = localStorage.getItem("ishealthActive");
    return healthData ? JSON.parse(healthData) : [];
  });

  function healthslider() {
    sethealthActive(!ishealthActive);
  }

  useEffect(() => {
    localStorage.setItem("ishealthActive", JSON.stringify(ishealthActive));
  }, [ishealthActive]);

  //Sports settings
  const [issportsActive, setsportsActive] = useState(() => {
    const SportsData = localStorage.getItem("issportsActive");
    return SportsData ? JSON.parse(SportsData) : [];
  });

  function sportsslider() {
    setsportsActive(!issportsActive);
  }

  useEffect(() => {
    localStorage.setItem("issportsActive", JSON.stringify(issportsActive));
  }, [issportsActive]);

  //Business settings
  const [isbusinessActive, setbusinessActive] = useState(() => {
    const BusinessData = localStorage.getItem("isbusinessActive");
    return BusinessData ? JSON.parse(BusinessData) : [];
  });

  function businessslider() {
    setbusinessActive(!isbusinessActive);
  }

  useEffect(() => {
    localStorage.setItem("isbusinessActive", JSON.stringify(isbusinessActive));
  }, [isbusinessActive]);

  //Travel settings
  const [istravelActive, settravelActive] = useState(() => {
    const TravelData = localStorage.getItem("istravelActive");
    return TravelData ? JSON.parse(TravelData) : [];
  });

  function travelslider() {
    settravelActive(!istravelActive);
  }

  useEffect(() => {
    localStorage.setItem("istravelActive", JSON.stringify(istravelActive));
  }, [istravelActive]);

  const refreshswipe = useSwipeable({
    onSwipedDown: () => window.location.reload(),
  });

  return (
    <div>
      <nav className="nav" {...refreshswipe}>
        <Link to="/">
          <FontAwesomeIcon className="fontawesome" icon={faChevronLeft} />
        </Link>
        <h1>News settings</h1>
        <div className="blankdiv"></div>
      </nav>

      <h2 className="settingsh2">Manage</h2>
      <h3 className="settingsh3">Categories</h3>
      <div className="settingswhiteborder"></div>

      <div className="settings">
        <div className="setting">
          <h4>ARTS</h4>
          <div
            className={isartsActive ? "settingslider_active" : "settingslider"}
            onClick={artsslider}
          >
            <div
              className={isartsActive ? "slidercircle_active" : "slidercircle"}
            ></div>
          </div>
        </div>

        <div className="setting">
          <h4>HEALTH</h4>
          <div
            className={
              ishealthActive ? "settingslider_active" : "settingslider"
            }
            onClick={healthslider}
          >
            <div
              className={
                ishealthActive ? "slidercircle_active" : "slidercircle"
              }
            ></div>
          </div>
        </div>

        <div className="setting">
          <h4>SPORTS</h4>
          <div
            className={
              issportsActive ? "settingslider_active" : "settingslider"
            }
            onClick={sportsslider}
          >
            <div
              className={
                issportsActive ? "slidercircle_active" : "slidercircle"
              }
            ></div>
          </div>
        </div>

        <div className="setting">
          <h4>BUSINESS</h4>
          <div
            className={
              isbusinessActive ? "settingslider_active" : "settingslider"
            }
            onClick={businessslider}
          >
            <div
              className={
                isbusinessActive ? "slidercircle_active" : "slidercircle"
              }
            ></div>
          </div>
        </div>

        <div className="setting">
          <h4>TRAVEL</h4>
          <div
            className={
              istravelActive ? "settingslider_active" : "settingslider"
            }
            onClick={travelslider}
          >
            <div
              className={
                istravelActive ? "slidercircle_active" : "slidercircle"
              }
            ></div>
          </div>
        </div>
      </div>

      <Darkmode />
    </div>
  );
}

export default Settings;
