import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import { useCookies } from "react-cookie";

function Settings() {
  const [cookies, setCookie] = useCookies(["settings"]);
  const [europe, setEurope] = useState("");
  const [health, setHealth] = useState("");
  const [sport, setSport] = useState("");
  const [business, setBusiness] = useState("");
  const [travel, setTravel] = useState("");

  const [isEuropeActive, setEuropeActive] = useState(true);

  function europeslider() {
    console.log("Slider");
    setEuropeActive(!isEuropeActive);
    setCookie("Europe", europe, { path: "/" });
  }

  const [isHealthActive, setHealthActive] = useState(true);

  function healthslider() {
    console.log("Slider");
    setHealthActive(!isHealthActive);
    setCookie("Health", health, { path: "/" });
  }

  const [isSportActive, setSportActive] = useState(true);

  function sportslider() {
    console.log("Slider");
    setSportActive(!isSportActive);
    setCookie("Sport", sport, { path: "/" });
  }

  const [isBusinessActive, setBusinessActive] = useState(true);

  function businessslider() {
    console.log("Slider");
    setBusinessActive(!isBusinessActive);
    setCookie("Business", business, { path: "/" });
  }

  const [isTravelActive, setTravelActive] = useState(true);

  function travelslider() {
    console.log("Slider");
    setTravelActive(!isTravelActive);
    setCookie("Travel", travel, { path: "/" });
  }

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
          <h4>EUROPE</h4>
          <div
            className={
              isEuropeActive ? "settingslider_active" : "settingslider"
            }
            onClick={europeslider}
          >
            <div
              className={
                isEuropeActive ? "slidercircle_active" : "slidercircle"
              }
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
