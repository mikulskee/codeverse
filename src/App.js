import React, { useEffect } from "react";

import MainTemplate from "./templates/MainTemplate";
import BurgerContextProvider from "./contexts/BurgerContext";

const App = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("orientationchange", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  });
  return (
    <BurgerContextProvider>
      <MainTemplate />
    </BurgerContextProvider>
  );
};

export default App;
