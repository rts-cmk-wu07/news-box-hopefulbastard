import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faCog } from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  return (
    <nav>
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
