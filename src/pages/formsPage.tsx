import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const FormsPage = () => {
  const {
    formPageFormOne1,
    formPageFormOne2,
    formPageFormTwo1,
    formPageFormTwo2,
    formPageFormThree1,
    formPageFormThree2,
    formPageOpenButton,
    formPageInfo,
  } = useContext(LanguageContext);
  return (
    <div id="main" className="container p-3">
      <div className="row">
        <div className="col-lg d-flex flex-column my-3 align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="./img/sdz2.jpg" className="card-img-top" alt="SD-Z2" />
            <div className="card-body">
              <h5 className="card-title">{formPageFormOne1}</h5>
              <p className="card-text">{formPageFormOne2}</p>
              <a
                href="https://www.podatki.gov.pl/media/4148/sd-z2-06-014.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                {formPageOpenButton}
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg d-flex flex-column my-3 align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="./img/sd3.jpg" className="card-img-top" alt="SD-3" />
            <div className="card-body">
              <h5 className="card-title">{formPageFormTwo1}</h5>
              <p className="card-text">{formPageFormTwo2}</p>
              <a
                href="https://www.podatki.gov.pl/media/4142/sd-3-06-015.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                {formPageOpenButton}
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg d-flex flex-column my-3 align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="./img/sd3a.jpg" className="card-img-top" alt="SD-3A" />
            <div className="card-body">
              <h5 className="card-title">{formPageFormThree1}</h5>
              <p className="card-text">{formPageFormThree2}</p>
              <a
                href="https://www.podatki.gov.pl/media/4144/sd-3a-06-014.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                {formPageOpenButton}
              </a>
            </div>
          </div>
        </div>
        <h5 className="p-3 text-center">{formPageInfo}</h5>
        <h5 className="text-center">
          <a
            href="https://www.podatki.gov.pl/pcc-sd/rozliczenie-podatku-sd-od-darowizny/"
            target="_blank"
            rel="noreferrer"
          >
            podatki.gov.pl
          </a>
        </h5>
      </div>
    </div>
  );
};

export default FormsPage;
