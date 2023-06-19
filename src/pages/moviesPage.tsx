import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const MoviesPage = () => {
  const { moviesPageMovie1, moviesPageMovie2, moviesPageMovie3 } =
    useContext(LanguageContext);

  const moviesArray = [
    {
      src: "https://www.youtube.com/embed/ycp6ZqrjsOo",
      text: moviesPageMovie1,
    },
    {
      src: "https://www.youtube.com/embed/ZRjsYNkKcP0",
      text: moviesPageMovie2,
    },
    {
      src: "https://www.youtube.com/embed/UgAowKyL7EI",
      text: moviesPageMovie3,
    },
  ];

  return (
    <div id="main" className="container my-5 pb-5">
      <div className="row">
        {moviesArray.map((movie) => (
          <div className="col-lg d-flex flex-column my-5 align-items-center">
            <h4>{movie.text}</h4>
            <iframe
              width="350px"
              height="200px"
              src={movie.src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
