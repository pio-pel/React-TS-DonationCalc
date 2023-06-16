import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import inputValidation from "../helpers/inputValidation";
import CurrencyMenu from "../components/CurrencyMenu";
import ValidationAlert from "../components/ValidationAlert";

interface CurrencyGroupInterface {
  dataFromNBP: () => Promise<void>;
  selectedCurrency: { [key: string]: string };
  validation: { [key: string]: boolean };
  setValidation: (value: { [key: string]: boolean }) => void;
  setSelectedCurrency: (value: { [key: string]: string }) => void;
  inputDonationAmount: string;
  setInputDonationAmount: (value: string) => void;
  dataRates: [{ currency: string; code: string; mid: string }];
}

export function CurrencyGroup({
  dataFromNBP,
  selectedCurrency,
  validation,
  setValidation,
  dataRates,
  setSelectedCurrency,
  inputDonationAmount,
  setInputDonationAmount,
}: CurrencyGroupInterface) {
  const { calculatorPageSelectCurrencyAndEnterAmount } =
    useContext(LanguageContext);

  return (
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
            rates={dataRates}
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
                setInputDonationAmount(inputValidation(e.target.value));
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
  );
}
