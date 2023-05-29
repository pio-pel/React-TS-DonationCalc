export interface LanguageButtonInterface {
  languageButton: string;
  setLanguageButton: (value: string) => void;
}

export function LanguageButton({
  languageButton,
  setLanguageButton,
}: LanguageButtonInterface) {
  const polishIsTrue = languageButton === "pl" ? true : false;

  return (
    <div
      id="languageButton"
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
        defaultChecked={polishIsTrue}
      />
      <label
        className="btn btn-outline-light"
        htmlFor="btnradio1"
        onClick={() => setLanguageButton("pl")}
      >
        PL
      </label>
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        autoComplete="off"
        defaultChecked={!polishIsTrue}
      />
      <label
        className="btn btn-outline-light"
        htmlFor="btnradio2"
        onClick={() => setLanguageButton("en")}
      >
        EN
      </label>
    </div>
  );
}
