import { languageChange } from "../helpers/languageChange";

interface LanguageInterface {
  languagePack: { [key: string]: string };
  setLanguagePack: (value: { [key: string]: string }) => void;
}

export function LanguageButton({
  languagePack,
  setLanguagePack,
}: LanguageInterface) {
  const polishIsTrue = languagePack.PL ? true : false;

  const buttonsArray = [
    { number: 1, language: "pl", checkPolish: polishIsTrue },
    { number: 2, language: "en", checkPolish: !polishIsTrue },
  ];

  return (
    <div
      id="languageButton"
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      {buttonsArray.map((button) => (
        <>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id={`btnradio${button.number}`}
            autoComplete="off"
            defaultChecked={button.checkPolish}
          />
          <label
            className="btn btn-outline-light"
            htmlFor={`btnradio${button.number}`}
            onClick={() => setLanguagePack(languageChange(button.language))}
          >
            PL
          </label>
        </>
      ))}
    </div>
  );
}
