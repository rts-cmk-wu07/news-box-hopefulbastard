import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="searchnewsbackground">
      <div className="searchnewsdiv">
        <input
          type="text"
          placeholder="Search news"
          className="searchnews"
        ></input>{" "}
        <FontAwesomeIcon className="searchnewsicon" icon={faSearch} />
      </div>
    </div>
  );
};

export default Search;
