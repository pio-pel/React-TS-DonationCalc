import { useContext } from "react";
import { LanguageContext } from "./layout";

const MoviesPage = () => {
  const languagePack = useContext(LanguageContext);
  return (
    <div id="main" className="container my-5 pb-5">
      <div className="row">
        <div className="col-lg d-flex flex-column my-5 align-items-center">
          <h4>{languagePack.video1}</h4>
          <iframe
            width="350px"
            height="200px"
            src="https://www.youtube.com/embed/ycp6ZqrjsOo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="col-lg d-flex flex-column my-5 align-items-center">
          <h4>{languagePack.video2}</h4>
          <iframe
            width="350px"
            height="200px"
            src="https://www.youtube.com/embed/ZRjsYNkKcP0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-lg d-flex flex-column my-5 align-items-center">
          <h4>{languagePack.video3}</h4>
          <iframe
            width="350px"
            height="200px"
            src="https://www.youtube.com/embed/UgAowKyL7EI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
