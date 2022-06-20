const Article = () => {
  return (
    <div className="article">
      <div>
        <img src={img} alt="author image"></img>
      </div>
      <div>
        <h3>{articlename}</h3>
        <p>{articlepreview}</p>
      </div>
    </div>
  );
};

export default Article;
