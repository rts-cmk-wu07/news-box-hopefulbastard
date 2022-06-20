import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";
import { useState, useEffect } from "react";

function Settings() {
  // Arts settings
  const [isArtsActive, setArtsActive] = useState(() => {
    const ArtsData = localStorage.getItem("isArtsActive");
    return ArtsData ? JSON.parse(ArtsData) : [];
  });

  function artsslider() {
    setArtsActive(!isArtsActive);
  }

  useEffect(() => {
    localStorage.setItem("isArtsActive", JSON.stringify(isArtsActive));
  }, [isArtsActive]);

  //Health settings
  const [isHealthActive, setHealthActive] = useState(() => {
    const HealthData = localStorage.getItem("isHealthActive");
    return HealthData ? JSON.parse(HealthData) : [];
  });

  function healthslider() {
    setHealthActive(!isHealthActive);
  }

  useEffect(() => {
    localStorage.setItem("isHealthActive", JSON.stringify(isHealthActive));
  }, [isHealthActive]);

  //Sport settings
  const [isSportActive, setSportActive] = useState(() => {
    const SportData = localStorage.getItem("isSportActive");
    return SportData ? JSON.parse(SportData) : [];
  });

  function sportslider() {
    setSportActive(!isSportActive);
  }

  useEffect(() => {
    localStorage.setItem("isSportActive", JSON.stringify(isSportActive));
  }, [isSportActive]);

  //Business settings
  const [isBusinessActive, setBusinessActive] = useState(() => {
    const BusinessData = localStorage.getItem("isBusinessActive");
    return BusinessData ? JSON.parse(BusinessData) : [];
  });

  function businessslider() {
    setBusinessActive(!isBusinessActive);
  }

  useEffect(() => {
    localStorage.setItem("isBusinessActive", JSON.stringify(isBusinessActive));
  }, [isBusinessActive]);

  //Travel settings
  const [isTravelActive, setTravelActive] = useState(() => {
    const TravelData = localStorage.getItem("isTravelActive");
    return TravelData ? JSON.parse(TravelData) : [];
  });

  function travelslider() {
    setTravelActive(!isTravelActive);
  }

  useEffect(() => {
    localStorage.setItem("isTravelActive", JSON.stringify(isTravelActive));
  }, [isTravelActive]);

  //darkmode settings
  function darkmode() {
    console.log("dark mode");
  }

  return (
    <div>
      <nav>
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
            className={isArtsActive ? "settingslider_active" : "settingslider"}
            onClick={artsslider}
          >
            <div
              className={isArtsActive ? "slidercircle_active" : "slidercircle"}
            ></div>
          </div>
        </div>

        <div className="setting">
          <h4>HEALTH</h4>
          <div
            className={
              isHealthActive ? "settingslider_active" : "settingslider"
            }
            onClick={healthslider}
          >
            <div
              className={
                isHealthActive ? "slidercircle_active" : "slidercircle"
              }
            ></div>
          </div>
        </div>

        <div className="setting">
          <h4>SPORT</h4>
          <div
            className={isSportActive ? "settingslider_active" : "settingslider"}
            onClick={sportslider}
          >
            <div
              className={isSportActive ? "slidercircle_active" : "slidercircle"}
            ></div>
          </div>
        </div>

        <div className="setting">
          <h4>BUSINESS</h4>
          <div
            className={
              isBusinessActive ? "settingslider_active" : "settingslider"
            }
            onClick={businessslider}
          >
            <div
              className={
                isBusinessActive ? "slidercircle_active" : "slidercircle"
              }
            ></div>
          </div>
        </div>

        <div className="setting">
          <h4>TRAVEL</h4>
          <div
            className={
              isTravelActive ? "settingslider_active" : "settingslider"
            }
            onClick={travelslider}
          >
            <div
              className={
                isTravelActive ? "slidercircle_active" : "slidercircle"
              }
            ></div>
          </div>
        </div>
      </div>

      <p className="darkmodetoggle" onClick={darkmode}>
        TOGGLE DARK MODE
      </p>
    </div>
  );
}

export default Settings;
