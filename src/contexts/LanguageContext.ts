import { createContext } from "react";
import languageChange from "../helpers/languageChange";

const LanguageContext = createContext<{ [key: string]: string }>(
  languageChange("pl")
);

export default LanguageContext;
