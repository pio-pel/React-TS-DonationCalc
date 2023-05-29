function ResultArea({
  result,
  date,
  isHidTrue,
}: {
  result: {
    code: string;
    mid: string;
    result: string;
    taxAmount: number | string;
    taxComment: string;
  };
  date: string;
  isHidTrue: boolean;
}) {
  return (
    <div
      id="resultGroup"
      className="container-fluid d-flex flex-column justify-content-between"
    >
      <div className="container-fluid h6 my-2 text-center">
        {localStorage.calculator10}
      </div>
      <div id="resultArea" className="container-fluid h4">
        <div
          id="resultHiddenArea"
          className={`container fw-bold ${isHidTrue ? "hidResult" : ""}`}
        >
          <div
            id="resultCurrency"
            className="d-flex justify-content-center my-3"
          >
            <p>{result.code}</p>
          </div>
          <div id="resultRecord" className="d-flex justify-content-between">
            <p>{localStorage.resultRecord}:</p>
            <p>{date}</p>
          </div>
          <div id="resultRate" className="d-flex justify-content-between">
            <p>{localStorage.resultRate}:</p>
            <p>{result.mid} PLN</p>
          </div>
          <div id="resultDonation" className="d-flex justify-content-between">
            <p>{localStorage.resultDonation}:</p>
            <p style={{ color: "green" }}>{result.result} PLN</p>
          </div>
          <div id="resultTax" className="d-flex justify-content-between">
            <p>{localStorage.resultTax}:</p>
            <p style={{ color: "red" }}>
              {typeof result.taxAmount === "number"
                ? result.taxAmount.toFixed(2)
                : localStorage[result.taxAmount]}{" "}
              PLN
            </p>
          </div>
        </div>
      </div>
      <div
        id="resultComments"
        className={`container-fluid h6 my-2 text-center ${
          isHidTrue ? "hidComment" : ""
        }`}
      >
        {localStorage[result.taxComment]}
      </div>
    </div>
  );
}

export default ResultArea;
