import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faCog } from "@fortawesome/fontawesome-free-solid";
import { useSwipeable, onSwipedDown } from "react-swipeable";

const Navbar = () => {
  const refreshswipe = useSwipeable({
    onSwipedDown: () => window.location.reload(),
  });

  return (
    <nav className="nav" {...refreshswipe}>
      <Link to="/archive">
        <FontAwesomeIcon className="fontawesome" icon={faInbox} />
      </Link>
      <h1>Frontpage</h1>
      <Link to="/settings">
        <FontAwesomeIcon className="fontawesome" icon={faCog} />
      </Link>
    </nav>
  );
};

export default Navbar;
