import { Outlet } from "react-router-dom";
import {
  LanguageButton,
  LanguageButtonInterface,
} from "../js/components/LanguageButton";
import BurgerButtonMenu from "../js/components/BurgerButtonMenu";

function Layout({
  languageButton,
  setLanguageButton,
}: LanguageButtonInterface) {
  return (
    <>
      <BurgerButtonMenu />

      <LanguageButton
        languageButton={languageButton}
        setLanguageButton={setLanguageButton}
      />

      <div id="header" className="container-fluid pb-3 pt-5 text-white">
        <i id="calcIcon" className="fa-solid fa-calculator fa-5x"></i>
        <div>
          <h1>Kalkulator podatku od darowizny</h1>
          <p>Narzędzie do obliczania podatku od darowizn w walutach obcych</p>
        </div>
      </div>

      <Outlet />

      <div id="footer" className="container-fluid my-1 text-white">
        <div>
          <i className="fa-solid fa-copyright"></i> Piotr Pelikan
        </div>
      </div>
    </>
  );
}

export default Layout;
