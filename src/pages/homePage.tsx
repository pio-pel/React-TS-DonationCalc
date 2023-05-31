import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "./layout";

const HomePage = () => {
  const languagePack = useContext(LanguageContext);
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
            <h4>{languagePack.index1}</h4>
            <p>{languagePack.index2}</p>
          </div>

          <div>
            <h4>{languagePack.index3}</h4>
            <p>{languagePack.index4}</p>
            <p></p>
          </div>
          <div>
            <h4>{languagePack.index5}</h4>
            <p>{languagePack.index6}</p>
            <p>{languagePack.index7}</p>
          </div>
          <div>
            <div className="countArea">
              <div id="toCalc">
                <Link to="/calculator">
                  <i className="fa-solid fa-calculator">&nbsp;</i>
                  <span>{languagePack.index8}</span>
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
