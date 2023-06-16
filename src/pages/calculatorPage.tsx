import { useState } from "react";
import setCalendarDefaultDate from "../helpers/setCalendarDefaultDate";
import NbpService from "../services/nbpService";
import countResult from "../helpers/countResult";
import ResultArea from "../components/ResultArea";
import { TaxGroup } from "../components/TaxGroup";
import { CalendarGroup } from "../components/CalendarGroup";
import { CountGroup } from "../components/CountGroup";
import { CurrencyGroup } from "../components/CurrencyGroup";

const service = new NbpService(
  "https://api.nbp.pl/api/exchangerates/tables/a/"
);

interface Data {
  effectiveDate: string;
  no: string;
  rates: [{ currency: string; code: string; mid: string }];
  table: string;
}

interface Result {
  code: string;
  mid: string;
  result: string;
  taxAmount: number | string;
  taxComment: string;
}

function Calculator() {
  const defaultDate = setCalendarDefaultDate();

  //It's how data object from NBP looks
  const initialStateData: Data = {
    effectiveDate: "",
    no: "",
    rates: [{ currency: "", code: "", mid: "" }],
    table: "",
  };
  const initialResults: Result = {
    code: "",
    mid: "",
    result: "",
    taxAmount: 0.0,
    taxComment: "",
  };
  const initialSelectedCurrency = {
    currency: "",
    code: "",
    mid: "",
  };

  const initialValidation = {
    isCalendarValid: true,
    isDonationAmountValid: true,
    isSelectedCurrencyValid: true,
  };

  const [selectedTaxGroup, setSelectedTaxGroup] = useState<number | null>(null);
  const [calendarDate, setCalendarDate] = useState(defaultDate);
  const [inputDonationAmount, setInputDonationAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState<{
    [key: string]: string;
  }>(initialSelectedCurrency);
  const [data, setData] = useState(initialStateData);

  const [isHidTrue, setIsHidTrue] = useState(false);
  const [validation, setValidation] = useState<{ [key: string]: boolean }>(
    initialValidation
  );
  const [result, setResult] = useState(initialResults);

  //get data from NBP
  const dataFromNBP = async () => {
    const newData = await service.getCurrencyRates(calendarDate);
    if (newData) setData(newData);
  };

  //return result if all forms/buttons are correct
  const validateAndCountResult = () => {
    const checkValidation = {
      isCalendarValid: !calendarDate ? false : true,
      isDonationAmountValid: !inputDonationAmount ? false : true,
      isSelectedCurrencyValid: !selectedCurrency.code ? false : true,
    };

    setValidation(checkValidation);

    if (Object.values(checkValidation).includes(false)) {
      setIsHidTrue(false);
    } else {
      setResult(
        countResult(selectedCurrency, selectedTaxGroup, inputDonationAmount)
      );

      //show/hide result animation
      setIsHidTrue(false);
      setTimeout(() => {
        setIsHidTrue(true);
      }, 1);
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  //set all states as default (clear button)
  const defaultStates = () => {
    window.scrollTo(0, document.body.scrollTop);
    setIsHidTrue(false);
    setCalendarDate(defaultDate);
    setInputDonationAmount("");
    setSelectedCurrency(initialSelectedCurrency);
    setSelectedTaxGroup(null);
    setValidation(initialValidation);
  };

  return (
    <div id="main" className="container">
      <div id="mainArea" className="row">
        <div id="left-side" className="col-lg-7 my-3">
          <TaxGroup
            selectedTaxGroup={selectedTaxGroup}
            setSelectedTaxGroup={setSelectedTaxGroup}
          />
          <CalendarGroup
            defaultDate={defaultDate}
            calendarDate={calendarDate}
            setCalendarDate={setCalendarDate}
            validation={validation}
            setValidation={setValidation}
            initialSelectedCurrency={initialSelectedCurrency}
            setSelectedCurrency={setSelectedCurrency}
            setIsHidTrue={setIsHidTrue}
          />
          <CurrencyGroup
            dataFromNBP={dataFromNBP}
            selectedCurrency={selectedCurrency}
            validation={validation}
            setValidation={setValidation}
            dataRates={data.rates}
            setSelectedCurrency={setSelectedCurrency}
            inputDonationAmount={inputDonationAmount}
            setInputDonationAmount={setInputDonationAmount}
          />
          <CountGroup
            defaultStates={defaultStates}
            validateAndCountResult={validateAndCountResult}
          />
        </div>

        <div id="right-side" className="col-lg-5 my-3">
          <ResultArea
            result={result}
            date={data.effectiveDate}
            isHidTrue={isHidTrue}
          />
        </div>
      </div>
    </div>
  );
}
export default Calculator;
