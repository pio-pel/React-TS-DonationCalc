import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../contexts/LanguageContext";

export default function BurgerButtonMenu() {
  const {
    burgerButtonMenuMain,
    burgerButtonMenuCalculator,
    burgerButtonMenuForms,
    burgerButtonMenuMovies,
  } = useContext(LanguageContext);
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
          <span>{burgerButtonMenuMain}</span>
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/calculator">
          <i className="fa-solid fa-calculator">&nbsp;</i>
          <span>{burgerButtonMenuCalculator}</span>
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/forms">
          <i className="fa-solid fa-file">&nbsp;</i>
          <span>{burgerButtonMenuForms}</span>
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/movies">
          <i className="fa-solid fa-film">&nbsp;</i>
          <span>{burgerButtonMenuMovies}</span>
        </Link>
      </div>
    </>
  );
}
