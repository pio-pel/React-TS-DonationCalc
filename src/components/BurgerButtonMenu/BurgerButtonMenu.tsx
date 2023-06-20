import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./BurgerButtonMenu.scss";

export function BurgerButtonMenu() {
  const {
    burgerButtonMenuMain,
    burgerButtonMenuCalculator,
    burgerButtonMenuForms,
    burgerButtonMenuMovies,
  } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const linksArray = [
    { to: "", class: "fa-house", span: burgerButtonMenuMain },
    {
      to: "calculator",
      class: "fa-calculator",
      span: burgerButtonMenuCalculator,
    },
    { to: "forms", class: "fa-file", span: burgerButtonMenuForms },
    { to: "movies", class: "fa-film", span: burgerButtonMenuMovies },
  ];

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        id="burgerButton"
        style={{ marginTop: isOpen ? "300px" : "0px" }}
      >
        <i className="fa-solid fa-bars" />
      </div>

      <div
        id="offCanvasMenu"
        className="offCanvasMenuClass"
        style={{ height: isOpen ? "300px" : "0px" }}
      >
        {linksArray.map((link) => (
          <Link onClick={() => setIsOpen(!isOpen)} to={`/${link.to}`}>
            <i className={`fa-solid ${link.class}`} />
            <span> {link.span}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
