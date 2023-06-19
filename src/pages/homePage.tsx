import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const HomePage = () => {
  const {
    homePageTitle1,
    homePageTitle2,
    homePageQuestion1,
    homePageAnswer1,
    homePageQuestion2,
    homePageAnswer2,
    homePageWhatYouCanFind,
    homePageCalculatorButton,
  } = useContext(LanguageContext);
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
          <div>
            <h4>{homePageTitle1}</h4>
            <p>{homePageTitle2}</p>
          </div>

          <div>
            <h4>{homePageQuestion1}</h4>
            <p>{homePageAnswer1}</p>
            <p></p>
          </div>
          <div>
            <h4>{homePageQuestion2}</h4>
            <p>{homePageAnswer2}</p>
            <p>{homePageWhatYouCanFind}</p>
          </div>
          <div>
            <div className="countArea">
              <div id="toCalc">
                <Link to="/calculator">
                  <i className="fa-solid fa-calculator">&nbsp;</i>
                  <span>{homePageCalculatorButton}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
