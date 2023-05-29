import YesDataFromNBP from "./YesDataFromNBP";
import NoDataFromNBP from "./NoDataFromNBP";

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
