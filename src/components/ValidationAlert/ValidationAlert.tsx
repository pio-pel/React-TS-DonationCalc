import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export function ValidationAlert({ element }: { element: string }) {
  const languagePack = useContext(LanguageContext);
  const elementAlert = "alert".concat(element);
  return <div className="inputerror">{languagePack[elementAlert]}</div>;
}
