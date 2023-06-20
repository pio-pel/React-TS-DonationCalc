import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

interface CountGroupInterface {
  defaultStates: () => void;
  validateAndCountResult: () => void;
}

export function CountGroup({
  defaultStates,
  validateAndCountResult,
}: CountGroupInterface) {
  const {
    calculatorPageClearFormTitle,
    calculatorPageClearFormAreYouSure,
    calculatorPageClearFormAnswerNo,
    calculatorPageClearFormAnswerYes,
    calculatorPageResultButton,
  } = useContext(LanguageContext);

  return (
    <div id="countGroup" className="row gx-2">
      <div id="countGroupButtons" className="col-2">
        <div
          id="trashButton"
          className="trButtons"
          data-bs-toggle="modal"
          data-bs-target="#modal"
        >
          <i className="fa-solid fa-trash" />
        </div>
        <div
          className="modal fade"
          id="modal"
          aria-labelledby="modalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  {calculatorPageClearFormTitle}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {calculatorPageClearFormAreYouSure}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  {calculatorPageClearFormAnswerNo}
                </button>
                <button
                  id="trashButtonYes"
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={defaultStates}
                >
                  {calculatorPageClearFormAnswerYes}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="countGroupArea" className="col-10">
        <div
          onClick={validateAndCountResult}
          id="countArea"
          className="countArea"
        >
          <div>
            <i className="fa-solid fa-calculator" />
            <span> {calculatorPageResultButton}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
