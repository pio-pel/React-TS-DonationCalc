import { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

interface GroupSelectInterface {
  selectedTaxGroup: number | null;
  setSelectedTaxGroup: (value: number | null) => void;
}

function GroupSelect({
  selectedTaxGroup,
  setSelectedTaxGroup,
}: GroupSelectInterface) {
  const languagePack = useContext(LanguageContext);
  const commentForSelectedGroup =
    languagePack[`groupSelect${selectedTaxGroup}`];
  const commentDefault = languagePack.groupSelectNone;

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
    <>
      <div id="taxGroupButtons" className="col-2">
        <ButtonGroupSelect buttonNumber={{ arabic: 0, roman: '"0"' }} />
        <ButtonGroupSelect buttonNumber={{ arabic: 1, roman: "I" }} />
        <ButtonGroupSelect buttonNumber={{ arabic: 2, roman: "II" }} />
        <ButtonGroupSelect buttonNumber={{ arabic: 3, roman: "III" }} />
      </div>
      <div id="taxGroupArea" className="col-10">
        <div className="tArea">
          {commentForSelectedGroup ? commentForSelectedGroup : commentDefault}
        </div>
      </div>
    </>
  );
}

export default GroupSelect;
