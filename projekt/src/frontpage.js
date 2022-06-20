import "./App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faInbox,
  faCog,
} from "@fortawesome/fontawesome-free-solid";
import { useEffect, useState } from "react";
import axios from "axios";

const Frontpage = () => {
  const [isArtsActive, setArtsActive] = useState(() => {
    const ArtsData = localStorage.getItem("isArtsActive");
    return ArtsData ? JSON.parse(ArtsData) : [];
  });

  function artsarticles() {
    const url =
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=AGiFWRd0mT4Gze0BdLA9NMKJ3tYgioaA";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.results.map((article) => {
          console.log(article.title);
        });
      });
  }

  const [isHealthActive, setHealthActive] = useState(() => {
    const HealthData = localStorage.getItem("isHealthActive");
    return HealthData ? JSON.parse(HealthData) : [];
  });
  const [isSportActive, setSportActive] = useState(() => {
    const SportData = localStorage.getItem("isSportActive");
    return SportData ? JSON.parse(SportData) : [];
  });
  const [isBusinessActive, setBusinessActive] = useState(() => {
    const BusinessData = localStorage.getItem("isBusinessActive");
    return BusinessData ? JSON.parse(BusinessData) : [];
  });
  const [isTravelActive, setTravelActive] = useState(() => {
    const TravelData = localStorage.getItem("isTravelActive");
    return TravelData ? JSON.parse(TravelData) : [];
  });

  return (
    <div>
      <nav>
        <Link to="/archive">
          <FontAwesomeIcon className="fontawesome" icon={faInbox} />
        </Link>
        <h1>Frontpage</h1>
        <Link to="/settings">
          <FontAwesomeIcon className="fontawesome" icon={faCog} />
        </Link>
      </nav>

      <div className="index">
        <div className={isArtsActive ? "newscategory_active" : "newscategory"}>
          <div className="newscategory_title">
            <h2>Arts</h2>
            <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
          </div>
        </div>
      </div>

      <div className="index">
        <div
          className={isHealthActive ? "newscategory_active" : "newscategory"}
        >
          <div className="newscategory_title">
            <h2>Health</h2>
            <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
          </div>
        </div>
      </div>

      <div className="index">
        <div className={isSportActive ? "newscategory_active" : "newscategory"}>
          <div className="newscategory_title">
            <h2>Sport</h2>
            <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
          </div>
          <div className="sportarticles articles">
            <article></article>
          </div>
        </div>

        <div className="index">
          <div
            className={
              isBusinessActive ? "newscategory_active" : "newscategory"
            }
          >
            <div className="newscategory_title">
              <h2>Business</h2>
              <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
            </div>
            <div className="businessarticles articles">
              <article></article>
            </div>
          </div>
        </div>

        <div className="index">
          <div
            className={isTravelActive ? "newscategory_active" : "newscategory"}
          >
            <div className="newscategory_title">
              <h2>Travel</h2>
              <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
            </div>
            <div className="travelarticles articles">
              <article></article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
