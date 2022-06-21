import useFetch from "react-hook-usefetch";
import { useSwipeable, onSwipedDown, onSwipedLeft } from "react-swipeable";
const url = "https://api.nytimes.com/svc/topstories/v2/";
const key = ".json?api-key=AGiFWRd0mT4Gze0BdLA9NMKJ3tYgioaA";

const Article = (props) => {
  const section = props.section;
  const { data } = useFetch(`${url}` + `${section}` + `${key}`);
  const results = data && data.results;
  const articleswipe = useSwipeable({
    onSwipedDown: () => null,
    onSwipedLeft: () => console.log("save to archive"),
  });

  return (
    <div className="article" {...articleswipe}>
      {data.results?.slice(1, 6).map((data) => {
        return (
          <a key={data.title} title={data.title} href={data.url}>
            <div>
              {/*
              <img
                className="articleimg"
                src={data.multimedia[0].url}
                alt={data.multimedia[0].caption}
              ></img>
        */}
            </div>
            <div className="articletext">
              <h3>{data.title}</h3>
              <p>{data.abstract}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Article;
