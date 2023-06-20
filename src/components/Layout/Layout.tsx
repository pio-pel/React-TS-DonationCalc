import { Outlet } from "react-router-dom";
import { useState } from "react";
import { LanguageButton } from "../LanguageButton/LanguageButton";
import { BurgerButtonMenu } from "../BurgerButtonMenu/BurgerButtonMenu";
import { languageChange } from "../../helpers/languageChange";
import { LanguageContext } from "../../contexts/LanguageContext";

function Layout() {
  const [languagePack, setLanguagePack] = useState(languageChange("pl"));

  return (
    <LanguageContext.Provider value={languagePack}>
      <BurgerButtonMenu />

      <LanguageButton
        languagePack={languagePack}
        setLanguagePack={setLanguagePack}
      />

      <div id="header" className="container-fluid pb-3 pt-5 text-white">
        <i id="calcIcon" className="fa-solid fa-calculator fa-5x" />
        <div>
          <h1>Kalkulator podatku od darowizny</h1>
          <p>Narzędzie do obliczania podatku od darowizn w walutach obcych</p>
        </div>
      </div>

      <Outlet />

      <div id="footer" className="container-fluid my-1 text-white">
        <div>
          <i className="fa-solid fa-copyright" /> Piotr Pelikan
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default Layout;
