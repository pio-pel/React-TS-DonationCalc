import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import languageChange from "./js/helpers/languageChange";
import Layout from "./pages/layout";
import Home from "./pages/homePage";
import Calculator from "./pages/calculatorPage";
import Forms from "./pages/formsPage";
import Movies from "./pages/moviesPage";

function App() {
  const [languageButton, setLanguageButton] = useState(
    localStorage.language ? localStorage.language : "pl"
  );
  languageChange(languageButton);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              languageButton={languageButton}
              setLanguageButton={setLanguageButton}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="forms" element={<Forms />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
