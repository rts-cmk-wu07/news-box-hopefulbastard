import useFetch from "react-hook-usefetch";
import { useSwipeable, onSwipedLeft } from "react-swipeable";
const url = "https://api.nytimes.com/svc/topstories/v2/";
const key = ".json?api-key=AGiFWRd0mT4Gze0BdLA9NMKJ3tYgioaA";

const Article = (props) => {
  const section = props.section;
  const { data } = useFetch(`${url}` + `${section}` + `${key}`);
  const results = data && data.results;
  const articleswipe = useSwipeable({
    onSwipedLeft: () => savetoarchive(),
  });

  function savetoarchive() {
    var savedArticles = JSON.parse(localStorage.getItem("allArticles"));
    if (savedArticles == null) savedArticles = [];
    var key = document.getElementsByClassName("aritcleinfo").key;
    var url = document.getElementsByClassName("articleinfo").href;
    var title = document.getElementsByClassName("articleinfo").title;
    var body = document.getElementsByClassName("articletext").p;
    var src = document.getElementsByClassName("articleimg").src;
    var alt = document.getElementsByClassName("articleimg").alt;
    var article = {
      key: "key",
      title: "title",
      url: "url",
      body: "body",
      imgsrc: "src",
      imgalt: "alt",
    };
    savedArticles.push(article);
    localStorage.setItem("allArticles", JSON.stringify(savedArticles));
  }

  return (
    <div className="article" {...articleswipe}>
      {data.results?.slice(1, 2).map((data) => {
        return (
          <a
            className="articleinfo"
            key={data.title}
            title={data.title}
            href={data.url}
          >
            <div>
              <img
                className="articleimg"
                src={data.multimedia[0].url}
                alt={data.multimedia[0].caption}
              ></img>
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
