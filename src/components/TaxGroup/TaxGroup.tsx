import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

interface GroupSelectInterface {
  selectedTaxGroup: number | null;
  setSelectedTaxGroup: (value: number | null) => void;
}

export function TaxGroup({
  selectedTaxGroup,
  setSelectedTaxGroup,
}: GroupSelectInterface) {
  const languagePack = useContext(LanguageContext);
  const commentForSelectedGroup =
    languagePack[`groupSelect${selectedTaxGroup}`];
  const commentDefault = languagePack.groupSelectNone;

  const buttonsArray = [
    { arabic: 0, roman: '"0"' },
    { arabic: 1, roman: "I" },
    { arabic: 2, roman: "II" },
    { arabic: 3, roman: "III" },
  ];

  function ButtonGroupSelect({
    buttonNumber,
  }: {
    buttonNumber: { arabic: number; roman: string };
  }) {
    return (
      <div
        onClick={(e) => {
          setSelectedTaxGroup(
            e.currentTarget.classList.length > 1 ? null : buttonNumber.arabic
          );
        }}
        className={`tButtons ${
          selectedTaxGroup === buttonNumber.arabic ? "buttonClicked" : ""
        }`}
      >
        {buttonNumber.roman}
      </div>
    );
  }
  return (
    <div id="taxGroup" className="row mb-2 gx-2">
      <div id="taxGroupButtons" className="col-2">
        {buttonsArray.map((buttonProperties) => (
          <ButtonGroupSelect buttonNumber={buttonProperties} />
        ))}
      </div>
      <div id="taxGroupArea" className="col-10">
        <div className="tArea">
          {commentForSelectedGroup ? commentForSelectedGroup : commentDefault}
        </div>
      </div>
    </div>
  );
}
