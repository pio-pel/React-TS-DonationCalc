import NbpService from "../services/nbpService";
import setCalendarDefaultDate from "../helpers/setCalendarDefaultDate";
  
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

  export const service = new NbpService(
    "https://api.nbp.pl/api/exchangerates/tables/a/"
  );
  export const defaultDate = setCalendarDefaultDate();
  //It's how data object from NBP looks
  export const initialStateData: Data = {
    effectiveDate: "",
    no: "",
    rates: [{ currency: "", code: "", mid: "" }],
    table: "",
  };
  export const initialResults: Result = {
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