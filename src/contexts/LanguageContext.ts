import { createContext } from "react";
import { languageChange } from "../helpers/languageChange";

export const LanguageContext = createContext<{ [key: string]: string }>(
  languageChange("pl")
);
