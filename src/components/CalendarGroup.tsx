import ValidationAlert from "./ValidationAlert";
import LanguageContext from "../contexts/LanguageContext";
import { useContext } from "react";

export function CalendarGroup({
  defaultDate,
  calendarDate,
  validation,
  setValidation,
  setCalendarDate,
  setData,
  setSelectedCurrency,
  initialStateData,
  initialSelectedCurrency,
}: any) {
  const { calculatorPageSelectDate } = useContext(LanguageContext);

  return (
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
                setValidation((validation: any) => ({
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
  );
}