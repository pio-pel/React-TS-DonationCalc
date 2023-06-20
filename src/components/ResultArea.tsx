import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

interface Result {
  code: string;
  mid: string;
  result: string;
  taxAmount: number | string;
  taxComment: string;
}

export function ResultArea({
  result,
  date,
  isHidTrue,
}: {
  result: Result;
  date: string;
  isHidTrue: boolean;
}) {
  const languagePack = useContext(LanguageContext);

  const resultsArray = [
    { id: "resultCurrency", text: "", outcome: result.code, align: "center" },
    {
      id: "resultRecord",
      text: languagePack.resultAreaRecord,
      outcome: date,
      align: "between",
    },
    {
      id: "resultRate",
      text: languagePack.resultAreaRate,
      outcome: result.mid,
      align: "between",
      pln: "PLN",
    },
    {
      id: "resultDonation",
      text: languagePack.resultAreaDonation,
      outcome: result.result,
      align: "between",
      pln: "PLN",
      color: "green",
    },
    {
      id: "resultTax",
      text: languagePack.resultAreaTax,
      outcome:
        typeof result.taxAmount === "number"
          ? result.taxAmount.toFixed(2)
          : languagePack.resultAreaTaxNoDataInfo,
      align: "between",
      pln: "PLN",
      color: "red",
    },
  ];

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
          {resultsArray.map((result) => (
            <div
              id={result.id}
              className={`d-flex justify-content-${result.align}`}
            >
              <p>{result.text}</p>
              <p style={{ color: result.color }}>
                {result.outcome} {result.pln}
              </p>
            </div>
          ))}
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
