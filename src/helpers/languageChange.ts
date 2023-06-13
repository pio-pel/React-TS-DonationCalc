import languagePackJSON from "../json/languagePack.json";

function languageChange(language: string) {
  const cache: { [key: string]: { [key: string]: string } } = languagePackJSON;
  const languagePack = cache[language];

  return languagePack;
}

export default languageChange;
