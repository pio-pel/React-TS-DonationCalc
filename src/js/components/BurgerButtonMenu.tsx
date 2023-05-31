import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../pages/layout";

export default function BurgerButtonMenu() {
  const languagePack = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        id="burgerButton"
        style={{ marginTop: isOpen ? "300px" : "0px" }}
      >
        <i className="fa-solid fa-bars"></i>
      </div>

      <div
        id="offCanvasMenu"
        className="offCanvasMenuClass"
        style={{ height: isOpen ? "300px" : "0px" }}
      >
        <Link onClick={() => setIsOpen(!isOpen)} to="/">
          <i className="fa-solid fa-house">&nbsp;</i>
          <span>{languagePack.offCanvasMenu1}</span>
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/calculator">
          <i className="fa-solid fa-calculator">&nbsp;</i>
          <span>{languagePack.offCanvasMenu2}</span>
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/forms">
          <i className="fa-solid fa-file">&nbsp;</i>
          <span>{languagePack.offCanvasMenu3}</span>
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/movies">
          <i className="fa-solid fa-film">&nbsp;</i>
          <span>{languagePack.offCanvasMenu4}</span>
        </Link>
      </div>
    </>
  );
}
