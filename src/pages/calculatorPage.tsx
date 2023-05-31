import { useState, useContext } from "react";
import setCalendarDefaultDate from "../js/helpers/setCalendarDefaultDate";
import inputValidation from "../js/helpers/inputValidation";
import GroupSelect from "../js/components/GroupSelect";
import NbpService from "../js/services/nbpService";
import CurrencyMenu from "../js/components/CurrencyMenu";
import countResult from "../js/helpers/countResult";
import ResultArea from "../js/components/ResultArea";
import ValidationAlert from "../js/components/ValidationAlert";
import { LanguageContext } from "./layout";

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
  const languagePack = useContext(LanguageContext);
  const defaultDate = setCalendarDefaultDate();
  const [calendarDate, setCalendarDate] = useState(defaultDate);

  const [inputDonationAmount, setinputDonationAmount] = useState("");

  //It's 1:1 how data object from NBP looks
  const initialStateData: Data = {
    effectiveDate: "",
    no: "",
    rates: [{ currency: "", code: "", mid: "" }],
    table: "",
  };
  const [data, setData] = useState(initialStateData);
  const [selectedTaxGroup, setSelectedTaxGroup] = useState<number | null>(null);
  const [isHidTrue, setIsHidTrue] = useState(false);
  const [validation, setValidation] = useState({
    isCalendarValid: true,
    isSelectedCurrencyValid: true,
    isDonationAmountValid: true,
  });

  const initialResults: Result = {
    code: "",
    mid: "",
    result: "",
    taxAmount: 0.0,
    taxComment: "",
  };
  const [result, setResult] = useState(initialResults);

  const initialSelectedCurrency = {
    currency: "",
    code: "",
    mid: "",
  };
  const [selectedCurrency, setSelectedCurrency] = useState(
    initialSelectedCurrency
  );

  const dataFromNBP = async () => {
    const newData = await service.getCurrencyRates(calendarDate);
    if (newData) setData(newData);
  };

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
      setIsHidTrue(false);
      setTimeout(() => {
        setIsHidTrue(true);
      }, 1);
      window.scrollTo(0, document.body.scrollHeight);
    }
  };

  const defaultStates = () => {
    window.scrollTo(0, document.body.scrollTop);
    setIsHidTrue(false);
    setCalendarDate(defaultDate);
    setinputDonationAmount("");
    setSelectedCurrency(initialSelectedCurrency);
  };

  return (
    <div id="main" className="container my-2">
      <div id="mainArea" className="row">
        <div id="left-side" className="col-lg-7">
          <div id="taxGroup" className="row">
            <GroupSelect
              selectedTaxGroup={selectedTaxGroup}
              setSelectedTaxGroup={setSelectedTaxGroup}
            />
          </div>

          <div id="calendarGroup" className="row">
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
                    title="Wybierz datę darowizny"
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
                    <ValidationAlert element="calendar" />
                  )}
                </div>
                <div id="calendarText">{languagePack.calculator2}</div>
              </div>
            </div>
          </div>

          <div id="currencyGroup" className="row">
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
                <ValidationAlert element="currencyMenu" />
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
                    <ValidationAlert element="donationAmount" />
                  )}
                </div>
                <div id="curAreaText">{languagePack.calculator4}</div>
              </div>
            </div>
          </div>

          <div id="countGroup" className="row">
            <div id="countGroupButtons" className="col-2">
              <div
                id="trashButton"
                // type="button"
                className="trButtons"
                data-bs-toggle="modal"
                data-bs-target="#modal"
              >
                <i className="fa-solid fa-trash"></i>
              </div>
              <div
                className="modal fade"
                id="modal"
                // tabIndex="-1"
                aria-labelledby="modalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="modalLabel">
                        {languagePack.calculator5}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">{languagePack.calculator6}</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        {languagePack.calculator7}
                      </button>
                      <button
                        id="trashButtonYes"
                        type="button"
                        className="btn btn-success"
                        data-bs-dismiss="modal"
                        onClick={defaultStates}
                      >
                        {languagePack.calculator8}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="countGroupArea" className="col-10">
              <div id="countArea" className="countArea">
                <div onClick={validateAndCountResult} id="countClick">
                  <i className="fa-solid fa-calculator"></i>
                  <span> {languagePack.calculator9}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="right-side" className="col-lg-5 my-2">
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
