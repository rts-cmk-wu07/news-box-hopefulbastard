import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faCog } from "@fortawesome/fontawesome-free-solid";
import Search from "./components/search";
import { useSwipeable, onSwipedDown } from "react-swipeable";

const Archive = () => {
  const refreshswipe = useSwipeable({
    onSwipedDown: () => window.location.reload(),
  });

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
        <div className="savedarticle">
          <h2>Saved article</h2>
          <p>Lorem ipsum something something text here</p>
        </div>
      </div>
    </div>
  );
};

export default Archive;
