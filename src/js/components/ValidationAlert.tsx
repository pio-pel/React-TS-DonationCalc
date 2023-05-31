import { useContext } from "react";
import { LanguageContext } from "../../pages/layout";

export default function ValidationAlert({ element }: { element: string }) {
  const languagePack = useContext(LanguageContext);
  const elementAlert = element.concat("Alert");
  return <div className="inputerror">{languagePack[elementAlert]}</div>;
}
