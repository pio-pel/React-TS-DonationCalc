import { Link } from "react-router-dom";

const homePage = () => {
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
            <h4>{localStorage.index1}</h4>
            <p>{localStorage.index2}</p>
          </div>

          <div>
            <h4>{localStorage.index3}</h4>
            <p>{localStorage.index4}</p>
            <p></p>
          </div>
          <div>
            <h4>{localStorage.index5}</h4>
            <p>{localStorage.index6}</p>
            <p>{localStorage.index7}</p>
          </div>
          <div>
            <div className="countArea">
              <div id="toCalc">
                <Link to="/calculator">
                  <i className="fa-solid fa-calculator">&nbsp;</i>
                  <span>{localStorage.index8}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
