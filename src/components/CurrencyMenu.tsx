import { YesDataFromNBP } from "./YesDataFromNBP";

//Return currency menu (when data is available) or waiting spinner
interface Rates {
  rates: [{ code: string; mid: string; currency: string }];
  setSelectedCurrency: (value: {
    currency: string;
    code: string;
    mid: string;
  }) => void;
}

export function CurrencyMenu({ rates, setSelectedCurrency }: Rates) {
  return rates.length > 1 ? (
    <YesDataFromNBP rates={rates} setSelectedCurrency={setSelectedCurrency} />
  ) : (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
}
