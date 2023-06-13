import { useState, useContext } from "react";
import setCalendarDefaultDate from "../helpers/setCalendarDefaultDate";
import inputValidation from "../helpers/inputValidation";
import GroupSelect from "../components/GroupSelect";
import NbpService from "../services/nbpService";
import CurrencyMenu from "../components/CurrencyMenu";
import countResult from "../helpers/countResult";
import ResultArea from "../components/ResultArea";
import ValidationAlert from "../components/ValidationAlert";
import LanguageContext from "../components/LanguageContext";

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
  const {
    calculatorPageSelectDate,
    calculatorPageSelectCurrencyAndEnterAmount,
    calculatorPageClearFormTitle,
    calculatorPageClearFormAreYouSure,
    calculatorPageClearFormAnswerNo,
    calculatorPageClearFormAnswerYes,
    calculatorPageResultButton,
  } = useContext(LanguageContext);
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
  const [selectedCurrency, setSelectedCurrency] = useState(
    initialSelectedCurrency
  );
  const [data, setData] = useState(initialStateData);

  const [isHidTrue, setIsHidTrue] = useState(false);
  const [validation, setValidation] = useState({
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
          <div id="taxGroup" className="row mb-2">
            <GroupSelect
              selectedTaxGroup={selectedTaxGroup}
              setSelectedTaxGroup={setSelectedTaxGroup}
            />
          </div>

          <div id="calendarGroup" className="row mb-2">
            <div id="calendarGroupButtons" className="col-2">
              <div className="cButtons">
                <i className="fa-regular fa-calendar-days"></i>
              </div>
            </div>
            <div id="calendarGroupArea" className="col-10">
              <div className="cArea">
                <div id="calendarInputArea">
                  <input
                    id="calendarInput"
                    type="date"
                    min="2022-10-13"
                    max={defaultDate}
                    value={calendarDate}
                    onChange={(e) => {
                      setValidation((validation) => ({
                        ...validation,
                        isCalendarValid: true,
                      }));
                      setCalendarDate(e.target.value);
                      setData(initialStateData);
                      setSelectedCurrency(initialSelectedCurrency);
                    }}
                    required
                  />
                  {!validation.isCalendarValid && (
                    <ValidationAlert element="Calendar" />
                  )}
                </div>
                <div id="calendarText">{calculatorPageSelectDate}</div>
              </div>
            </div>
          </div>

          <div id="currencyGroup" className="row mb-2">
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
                  <i className="fa-solid fa-coins"></i>
                )}
              </div>
              {!validation.isSelectedCurrencyValid && (
                <ValidationAlert element="CurrencyMenu" />
              )}
              <ul
                onClick={(e) => {
                  setValidation((validation) => ({
                    ...validation,
                    isSelectedCurrencyValid: true,
                  }));
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
                      setValidation((validation) => ({
                        ...validation,
                        isDonationAmountValid: true,
                      }));
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

          <div id="countGroup" className="row">
            <div id="countGroupButtons" className="col-2">
              <div
                id="trashButton"
                className="trButtons"
                data-bs-toggle="modal"
                data-bs-target="#modal"
              >
                <i className="fa-solid fa-trash"></i>
              </div>
              <div
                className="modal fade"
                id="modal"
                aria-labelledby="modalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalLabel">
                        {calculatorPageClearFormTitle}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {calculatorPageClearFormAreYouSure}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        {calculatorPageClearFormAnswerNo}
                      </button>
                      <button
                        id="trashButtonYes"
                        type="button"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                        onClick={defaultStates}
                      >
                        {calculatorPageClearFormAnswerYes}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="countGroupArea" className="col-10">
              <div
                onClick={validateAndCountResult}
                id="countArea"
                className="countArea"
              >
                <div>
                  <i className="fa-solid fa-calculator"></i>
                  <span> {calculatorPageResultButton}</span>
                </div>
              </div>
            </div>
          </div>
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
