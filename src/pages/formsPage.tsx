import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const FormsPage = () => {
  const {
    formPageFormOneTitle,
    formPageFormOneText,
    formPageFormTwoTitle,
    formPageFormTwoText,
    formPageFormThreeTitle,
    formPageFormThreeText,
    formPageOpenButton,
    formPageInfo,
  } = useContext(LanguageContext);

  const formsArray = [
    {
      imgSrc: "./img/sdz2.jpg",
      alt: "SD-Z2",
      link: "https://www.podatki.gov.pl/media/4148/sd-z2-06-014.pdf",
      title: formPageFormOneTitle,
      text: formPageFormOneText,
    },
    {
      imgSrc: "./img/sd3.jpg",
      alt: "SD-3",
      link: "https://www.podatki.gov.pl/media/4142/sd-3-06-015.pdf",
      title: formPageFormTwoTitle,
      text: formPageFormTwoText,
    },
    {
      imgSrc: "./img/sd3a.jpg",
      alt: "SD-3A",
      link: "https://www.podatki.gov.pl/media/4144/sd-3a-06-014.pdf",
      title: formPageFormThreeTitle,
      text: formPageFormThreeText,
    },
  ];

  return (
    <div id="main" className="container p-3">
      <div className="row">
        {formsArray.map((form) => (
          <div className="col-lg d-flex flex-column my-3 align-items-center">
            <div className="card" style={{ width: "18rem" }}>
              <img src={form.imgSrc} className="card-img-top" alt={form.alt} />
              <div className="card-body">
                <h5 className="card-title">{form.title}</h5>
                <p className="card-text">{form.text}</p>
                <a
                  href={form.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success"
                >
                  {formPageOpenButton}
                </a>
              </div>
            </div>
          </div>
        ))}
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
