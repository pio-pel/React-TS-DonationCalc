import { useState, useContext } from "react";
import setCalendarDefaultDate from "../helpers/setCalendarDefaultDate";
import inputValidation from "../helpers/inputValidation";
import NbpService from "../services/nbpService";
import CurrencyMenu from "../components/CurrencyMenu";
import countResult from "../helpers/countResult";
import ResultArea from "../components/ResultArea";
import ValidationAlert from "../components/ValidationAlert";
import LanguageContext from "../contexts/LanguageContext";
import { TaxGroup } from "../components/TaxGroup";
import { CalendarGroup } from "../components/CalendarGroup";
import { CountGroup } from "../components/CountGroup";

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
  const { calculatorPageSelectCurrencyAndEnterAmount } =
    useContext(LanguageContext);
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

  const [selectedTaxGroup, setSelectedTaxGroup] = useState<number | null>(null);
  const [calendarDate, setCalendarDate] = useState(defaultDate);
  const [inputDonationAmount, setinputDonationAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState<{
    [key: string]: string;
  }>(initialSelectedCurrency);
  const [data, setData] = useState(initialStateData);

  const [isHidTrue, setIsHidTrue] = useState(false);
  const [validation, setValidation] = useState<{ [key: string]: boolean }>({
    isCalendarValid: true,
    isDonationAmountValid: true,
    isSelectedCurrencyValid: true,
  });
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
    setinputDonationAmount("");
    setSelectedCurrency(initialSelectedCurrency);
    setSelectedTaxGroup(null);
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

          <div id="currencyGroup" className="row mb-2 gx-2">
            <div id="currencyGroupButtons" className="col-2">
              <div
                onClick={dataFromNBP}
                id="currencyChoose"
                // type="button"
                className="dropdown-toggle curButtons"
                data-bs-toggle="dropdown"
              >
                {selectedCurrency.code.length > 0 ? (
                  selectedCurrency.code
                ) : (
                  <i className="fa-solid fa-coins" />
                )}
              </div>
              {!validation.isSelectedCurrencyValid && (
                <ValidationAlert element="CurrencyMenu" />
              )}
              <ul
                onClick={() => {
                  setValidation({
                    ...validation,
                    isSelectedCurrencyValid: true,
                  });
                }}
                id="currencyChooseMenu"
                className="dropdown-menu"
              >
                <CurrencyMenu
                  rates={data.rates}
                  setSelectedCurrency={setSelectedCurrency}
                />
              </ul>
            </div>
            <div id="currencyGroupArea" className="col-10">
              <div className="curArea">
                <div id="currencyInputArea">
                  <input
                    type="text"
                    inputMode="numeric"
                    id="enteredSum"
                    placeholder="0"
                    title=""
                    value={inputDonationAmount}
                    onChange={(e) => {
                      setValidation({
                        ...validation,
                        isDonationAmountValid: true,
                      });
                      setinputDonationAmount(inputValidation(e.target.value));
                    }}
                    required
                  />
                  {!validation.isDonationAmountValid && (
                    <ValidationAlert element="DonationAmount" />
                  )}
                </div>
                <div id="curAreaText">
                  {calculatorPageSelectCurrencyAndEnterAmount}
                </div>
              </div>
            </div>
          </div>
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
