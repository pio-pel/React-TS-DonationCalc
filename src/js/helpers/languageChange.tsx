import languagePackJSON from "../json/languagePackJSON.json";

// Get languagePackJSON from .json file & pass it as object to localStorage.

function languageChange(language: string) {
  const cache: { [key: string]: { [key: string]: string } } = languagePackJSON;

  const languagePack = cache[language];
  localStorage.setItem("language", `${language}`);

  for (let key of Object.keys(languagePack)) {
    localStorage.setItem(`${key}`, `${languagePack[key]}`);
  }
}

export default languageChange;
