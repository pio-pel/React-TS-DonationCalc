import { NbpService } from "../services/nbpService";
import { setCalendarDefaultDate } from "../helpers/setCalendarDefaultDate";
import { DataInterface, ResultInterface } from "../interfaces/interfaces";
  

  export const service = new NbpService(
    "https://api.nbp.pl/api/exchangerates/tables/a/"
  );
  export const defaultDate = setCalendarDefaultDate();
  //It's how data object from NBP looks
  export const initialStateData: DataInterface = {
    effectiveDate: "",
    no: "",
    rates: [{ currency: "", code: "", mid: "" }],
    table: "",
  };
  export const initialResults: ResultInterface = {
    code: "",
    mid: "",
    result: "",
    taxAmount: 0.0,
    taxComment: "",
  };
  export const initialSelectedCurrency = {
    currency: "",
    code: "",
    mid: "",
  };

  export const initialValidation = {
    isCalendarValid: true,
    isDonationAmountValid: true,
    isSelectedCurrencyValid: true,
  };