import { ValidationAlert } from "./ValidationAlert";
import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

type ValidationType = { [key: string]: boolean };
type SelectedCurrencyType = { [key: string]: string };

interface CalendarInterface {
  defaultDate: string;
  calendarDate: string;
  setCalendarDate: (value: string) => void;
  validation: ValidationType;
  setValidation: (value: ValidationType) => void;
  initialSelectedCurrency: SelectedCurrencyType;
  setSelectedCurrency: (value: SelectedCurrencyType) => void;
  setIsHidTrue: (value: boolean) => void;
}

export function CalendarGroup({
  defaultDate,
  calendarDate,
  setCalendarDate,
  validation,
  setValidation,
  initialSelectedCurrency,
  setSelectedCurrency,
  setIsHidTrue,
}: CalendarInterface) {
  const { calculatorPageSelectDate } = useContext(LanguageContext);

  return (
    <div id="calendarGroup" className="row mb-2 gx-2">
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
                setValidation({ ...validation, isCalendarValid: true });
                setCalendarDate(e.target.value);
                setSelectedCurrency(initialSelectedCurrency);
                setIsHidTrue(false);
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
  );
}
