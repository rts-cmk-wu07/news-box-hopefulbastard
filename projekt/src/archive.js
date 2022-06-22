import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCog } from "@fortawesome/fontawesome-free-solid";
import Search from "./components/search";
import { useSwipeable, onSwipedDown } from "react-swipeable";
import { useState } from "react";

const Archive = () => {
  const refreshswipe = useSwipeable({
    onSwipedDown: () => window.location.reload(),
  });

  const [mapsavedarticles, setMapsavedarticles] = useState([]);

  return (
    <div className="archive">
      <nav className="nav" {...refreshswipe}>
        <Link to="/">
          <FontAwesomeIcon className="fontawesome" icon={faChevronLeft} />
        </Link>
        <h1>Archive</h1>
        <Link to="/settings">
          <FontAwesomeIcon className="fontawesome" icon={faCog} />
        </Link>
      </nav>

      <div className="savedarticle-container">
        <Search />
        <div className="savedarticle"></div>
      </div>
    </div>
  );
};

export default Archive;
