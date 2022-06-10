import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/fontawesome-free-solid";

const Settings = () => {
  function slider() {
    console.log("change setting");
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
          <div className="settingslider" onClick={slider}>
            <div className="slidercircle"></div>
          </div>
        </div>

        <div className="setting">
          <h4>HEALTH</h4>
          <div className="settingslider" onClick={slider}>
            <div className="slidercircle"></div>
          </div>
        </div>

        <div className="setting">
          <h4>SPORT</h4>
          <div className="settingslider" onClick={slider}>
            <div className="slidercircle"></div>
          </div>
        </div>

        <div className="setting">
          <h4>BUSINESS</h4>
          <div className="settingslider" onClick={slider}>
            <div className="slidercircle"></div>
          </div>
        </div>

        <div className="setting">
          <h4>TRAVEL</h4>
          <div className="settingslider" onClick={slider}>
            <div className="slidercircle"></div>
          </div>
        </div>
      </div>

      <p className="darkmodetoggle" onClick={darkmode}>
        TOGGLE DARK MODE
      </p>
    </div>
  );
};

export default Settings;
