const formsPage = () => {
  return (
    <div id="main" className="container p-3">
      <div className="row">
        <div className="col-lg d-flex flex-column my-3 align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="./img/sdz2.jpg" className="card-img-top" alt="SD-Z2" />
            <div className="card-body">
              <h5 className="card-title">{localStorage.formOne1}</h5>
              <p className="card-text">{localStorage.formOne2}</p>
              <a
                href="https://www.podatki.gov.pl/media/4148/sd-z2-06-014.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                {localStorage.formOpen}
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg d-flex flex-column my-3 align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="./img/sd3.jpg" className="card-img-top" alt="SD-3" />
            <div className="card-body">
              <h5 className="card-title">{localStorage.formTwo1}</h5>
              <p className="card-text">{localStorage.formTwo2}</p>
              <a
                href="https://www.podatki.gov.pl/media/4142/sd-3-06-015.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                {localStorage.formOpen}
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg d-flex flex-column my-3 align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src="./img/sd3a.jpg" className="card-img-top" alt="SD-3A" />
            <div className="card-body">
              <h5 className="card-title">{localStorage.formThree1}</h5>
              <p className="card-text">{localStorage.formThree2}</p>
              <a
                href="https://www.podatki.gov.pl/media/4144/sd-3a-06-014.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-success"
              >
                {localStorage.formOpen}
              </a>
            </div>
          </div>
        </div>
        <h5 className="p-3 text-center">{localStorage.formInfo}</h5>
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

export default formsPage;