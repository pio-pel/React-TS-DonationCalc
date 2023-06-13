import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

interface Result {
  code: string;
  mid: string;
  result: string;
  taxAmount: number | string;
  taxComment: string;
}

function ResultArea({
  result,
  date,
  isHidTrue,
}: {
  result: Result;
  date: string;
  isHidTrue: boolean;
}) {
  const languagePack = useContext(LanguageContext);

  return (
    <div
      id="resultGroup"
      className="container-fluid d-flex flex-column justify-content-between"
    >
      <div className="container-fluid h6 my-2 text-center">
        {languagePack.resultAreaInfoAboutNBP}
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
            <p>{languagePack.resultAreaRecord}:</p>
            <p>{date}</p>
          </div>
          <div id="resultRate" className="d-flex justify-content-between">
            <p>{languagePack.resultAreaRate}:</p>
            <p>{result.mid} PLN</p>
          </div>
          <div id="resultDonation" className="d-flex justify-content-between">
            <p>{languagePack.resultAreaDonation}:</p>
            <p style={{ color: "green" }}>{result.result} PLN</p>
          </div>
          <div id="resultTax" className="d-flex justify-content-between">
            <p>{languagePack.resultAreaTax}:</p>
            <p style={{ color: "red" }}>
              {typeof result.taxAmount === "number"
                ? result.taxAmount.toFixed(2)
                : languagePack.resultAreaTaxNoDataInfo}{" "}
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
        {result.taxComment
          ? languagePack[result.taxComment]
          : languagePack.resultAreaTaxNoSelectedTaxGroupInfo}
      </div>
    </div>
  );
}

export default ResultArea;
