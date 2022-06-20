import "./App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
  faInbox,
  faCog,
} from "@fortawesome/fontawesome-free-solid";
import { useState } from "react";

const Frontpage = () => {
  const [isEuropeActive, setEuropeActive] = useState(true);
  const [isHealthActive, setHealthActive] = useState(true);
  const [isSportActive, setSportActive] = useState(true);
  const [isBusinessActive, setBusinessActive] = useState(true);
  const [isTravelActive, setTravelActive] = useState(true);

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
        <div
          className={isEuropeActive ? "newscategory_active" : "newscategory"}
        >
          <div className="newscategory_title">
            <h2>Europe</h2>
            <FontAwesomeIcon className="fontawesome" icon={faChevronDown} />
          </div>
          <div className="europearticles articles">
            <article></article>
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
          <div className="healtharticles articles">
            <article></article>
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
      </div>

      <div className="index">
        <div
          className={isBusinessActive ? "newscategory_active" : "newscategory"}
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
  );
};

export default Frontpage;
