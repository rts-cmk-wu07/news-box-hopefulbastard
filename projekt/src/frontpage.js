import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";
import Article from "./components/article";
import Navbar from "./components/navbar";

const Frontpage = () => {
  const [isArtsActive, setArtsActive] = useState(() => {
    const ArtsData = localStorage.getItem("isArtsActive");
    return ArtsData ? JSON.parse(ArtsData) : [];
  });

  const [isArtsSectionActive, setArtsSectionActive] = useState(false);

  function artssection() {
    setArtsSectionActive(!isArtsSectionActive);
  }

  const [isHealthActive, setHealthActive] = useState(() => {
    const HealthData = localStorage.getItem("isHealthActive");
    return HealthData ? JSON.parse(HealthData) : [];
  });

  const [isHealthSectionActive, setHealthSectionActive] = useState(false);

  function healthsection() {
    setHealthSectionActive(!isHealthSectionActive);
  }

  const [isSportActive, setSportActive] = useState(() => {
    const SportData = localStorage.getItem("isSportActive");
    return SportData ? JSON.parse(SportData) : [];
  });

  const [isSportSectionActive, setSportSectionActive] = useState(false);

  function sportsection() {
    setSportSectionActive(!isSportSectionActive);
  }

  const [isBusinessActive, setBusinessActive] = useState(() => {
    const BusinessData = localStorage.getItem("isBusinessActive");
    return BusinessData ? JSON.parse(BusinessData) : [];
  });

  const [isBusinessSectionActive, setBusinessSectionActive] = useState(false);

  function businesssection() {
    setBusinessSectionActive(!isBusinessSectionActive);
  }

  const [isTravelActive, setTravelActive] = useState(() => {
    const TravelData = localStorage.getItem("isTravelActive");
    return TravelData ? JSON.parse(TravelData) : [];
  });

  const [isTravelSectionActive, setTravelSectionActive] = useState(false);

  function travelsection() {
    setTravelSectionActive(!isTravelSectionActive);
  }

  return (
    <div>
      <Navbar />

      <div className="index">
        <div className={isArtsActive ? "newscategory_active" : "newscategory"}>
          <div
            className={
              isArtsSectionActive ? "opennewscategory" : "closednewscategory"
            }
          >
            <div
              className={
                isArtsSectionActive
                  ? "newscategory_title"
                  : "closednewscategory_title"
              }
              onClick={artssection}
            >
              <h2>Arts</h2>
              <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
            </div>
            <Article />
          </div>
        </div>
      </div>

      <div className="index">
        <div
          className={isHealthActive ? "newscategory_active" : "newscategory"}
        >
          <div
            className={
              isHealthSectionActive ? "opennewscategory" : "closednewscategory"
            }
          >
            <div
              className={
                isHealthSectionActive
                  ? "newscategory_title"
                  : "closednewscategory_title"
              }
              onClick={healthsection}
            >
              <h2>Health</h2>
              <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
            </div>
            <Article />
          </div>
        </div>
      </div>

      <div className="index">
        <div className={isSportActive ? "newscategory_active" : "newscategory"}>
          <div
            className={
              isSportSectionActive ? "opennewscategory" : "closednewscategory"
            }
          >
            <div
              className={
                isSportSectionActive
                  ? "newscategory_title"
                  : "closednewscategory_title"
              }
              onClick={sportsection}
            >
              <h2>Sport</h2>
              <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
            </div>
            <Article />
          </div>
        </div>
      </div>

      <div className="index">
        <div
          className={isBusinessActive ? "newscategory_active" : "newscategory"}
        >
          <div
            className={
              isBusinessSectionActive
                ? "opennewscategory"
                : "closednewscategory"
            }
          >
            <div
              className={
                isBusinessSectionActive
                  ? "newscategory_title"
                  : "closednewscategory_title"
              }
              onClick={businesssection}
            >
              <h2>Business</h2>
              <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
            </div>
            <Article />
          </div>
        </div>
      </div>

      <div className="index">
        <div
          className={isTravelActive ? "newscategory_active" : "newscategory"}
        >
          <div
            className={
              isTravelSectionActive ? "opennewscategory" : "closednewscategory"
            }
          >
            <div
              className={
                isTravelSectionActive
                  ? "newscategory_title"
                  : "closednewscategory_title"
              }
              onClick={travelsection}
            >
              <h2>Travel</h2>
              <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
            </div>
            <Article />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
