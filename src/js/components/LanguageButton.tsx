import languageChange from "../helpers/languageChange";

export interface LanguageInterface {
  languagePack: { [key: string]: string };
  setLanguagePack: (value: { [key: string]: string }) => void;
}

export default function LanguageButton({
  languagePack,
  setLanguagePack,
}: LanguageInterface) {
  const polishIsTrue = languagePack.PL ? true : false;

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
        onClick={() => setLanguagePack(languageChange("pl"))}
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
        onClick={() => setLanguagePack(languageChange("en"))}
      >
        EN
      </label>
    </div>
  );
}
