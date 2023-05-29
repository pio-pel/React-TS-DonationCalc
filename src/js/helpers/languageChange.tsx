import languagePackJSON from "../json/languagePackJSON.json";

// Get languagePackJSON from .json file & pass it as object to localStorage.

class LanguageChange {
  language: string;
  cache: { [key: string]: { [key: string]: string } };
  constructor(language: string) {
    this.language = language;
    this.cache = languagePackJSON;
  }

  setLanguage() {
    const languagePack = this.cache[this.language];
    localStorage.setItem("language", `${this.language}`);

    for (let key of Object.keys(languagePack)) {
      localStorage.setItem(`${key}`, `${languagePack[key]}`);
    }
  }
}
export default LanguageChange;
