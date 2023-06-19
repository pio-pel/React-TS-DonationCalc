//Menu currency-list filling by data from nbpService

import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

interface Rates {
  rates: [{ code: string; mid: string; currency: string }];
  setSelectedCurrency: (value: {
    currency: string;
    code: string;
    mid: string;
  }) => void;
}

export function YesDataFromNBP({ rates, setSelectedCurrency }: Rates) {
  const languagePack = useContext(LanguageContext);
  const currencyList = [];

  for (let rate of rates) {
    const { currency, code, mid } = rate;
    const button = {
      id: rate.code,
      html: (
        <button
          onClick={() => setSelectedCurrency({ currency, code, mid })}
          id={`${rate.code}`}
          className="dropdown-item"
        >
          <b>{`${rate.code}`}</b>
          {` ${languagePack[rate.code]}`}
        </button>
      ),
    };

    rate.code === "USD" || rate.code === "EUR"
      ? currencyList.unshift(button)
      : currencyList.push(button);
  }

  currencyList.splice(2, 0, {
    id: "divider",
    html: <hr className="dropdown-divider"></hr>,
  });

  return (
    <>
      {currencyList.map((element) => (
        <li key={element.id}>{element.html}</li>
      ))}
    </>
  );
}
