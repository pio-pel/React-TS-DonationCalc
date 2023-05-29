import { useState } from "react";

function GroupSelect(props: { handleTaxGroup: any }) {
  const [classLength, setClassLength] = useState(0);
  const [buttonClicked, setButtonClicked] = useState({ id: "", nr: 0 });
  const taxText = [
    localStorage.groupSelect0,
    localStorage.groupSelect1,
    localStorage.groupSelect2,
    localStorage.groupSelect3,
    localStorage.groupSelectNone,
  ];

  function ButtonGroupSelect({ id, nr }: { id: string; nr: number }) {
    return (
      <div
        onClick={(e) => {
          setClassLength(e.currentTarget.classList.length);
          setButtonClicked({ id: e.currentTarget.id, nr: nr });
          props.handleTaxGroup(e.currentTarget.classList.length > 1 ? 4 : nr);
        }}
        id={id}
        className={`tButtons ${
          buttonClicked.id !== id ? "" : classLength > 1 ? "" : "buttonClicked"
        }`}
      >
        {id}
      </div>
    );
  }
  return (
    <>
      <div id="taxGroupButtons" className="col-2">
        <ButtonGroupSelect id='"0"' nr={0} />
        <ButtonGroupSelect id="I" nr={1} />
        <ButtonGroupSelect id="II" nr={2} />
        <ButtonGroupSelect id="III" nr={3} />
      </div>
      <div id="taxGroupArea" className="col-10">
        <div className="tArea">
          {classLength > 1 ? taxText[4] : taxText[buttonClicked.nr]}
        </div>
      </div>
    </>
  );
}

export default GroupSelect;
