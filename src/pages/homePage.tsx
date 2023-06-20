import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const HomePage = () => {
  const {
    homePageTitle1,
    homePageText1,
    homePageQuestion1,
    homePageAnswer1,
    homePageQuestion2,
    homePageAnswer2,
    homePageWhatYouCanFind,
    homePageCalculatorButton,
  } = useContext(LanguageContext);

  const homePageArray = [
    { heading: homePageTitle1, text: homePageText1 },
    { heading: homePageQuestion1, text: homePageAnswer1 },
    { heading: homePageQuestion2, text: homePageAnswer2 },
    { heading: "", text: homePageWhatYouCanFind },
  ];

  return (
    <div id="main" className="container">
      <div className="row">
        <div className="col-lg-2 my-3">
          <div className="d-flex align-items-center" style={{ height: "100%" }}>
            <div>
              <i
                id="donationIco"
                className="fa-solid fa-hand-holding-dollar fa-8x"
              ></i>
            </div>
          </div>
        </div>

        <div className="col-lg-8 my-3">
          {homePageArray.map((paragraph) => (
            <>
              <h4>{paragraph.heading}</h4>
              <p>{paragraph.text}</p>
            </>
          ))}

          <div className="countArea">
            <div id="toCalc">
              <Link to="/calculator">
                <i className="fa-solid fa-calculator" />
                <span> {homePageCalculatorButton}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
