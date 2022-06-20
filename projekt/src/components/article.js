import useFetch from "react-hook-usefetch";
const url = "https://api.nytimes.com/svc/topstories/v2/";
const key = ".json?api-key=AGiFWRd0mT4Gze0BdLA9NMKJ3tYgioaA";

const Article = () => {
  const { data } = useFetch(`${url}` + "arts" + `${key}`);
  const results = data && data.results;
  return (
    <div className="article">
      {data.results?.map((data) => {
        return (
          <article key={data.title} title={data.title} href={data.url}>
            <div>
              <img className="articleimg" src={data.multimedia[0].url}></img>
            </div>
            <div>
              <h3>{data.title}</h3>
              <p>{data.abstract}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Article;
