import YesDataFromNBP from "./YesDataFromNBP";
import NoDataFromNBP from "./NoDataFromNBP";

//Return currency menu (when data is available) or waiting spinner
interface Rates {
  rates: [{ code: string; mid: string; currency: string }];
  setSelectedCurrency: (value: {
    currency: string;
    code: string;
    mid: string;
  }) => void;
}

function CurrencyMenu({ rates, setSelectedCurrency }: Rates) {
  return rates.length > 1 ? (
    <YesDataFromNBP rates={rates} setSelectedCurrency={setSelectedCurrency} />
  ) : (
    <NoDataFromNBP />
  );
}

export default CurrencyMenu;
