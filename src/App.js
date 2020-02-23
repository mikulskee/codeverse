import React, { useEffect } from "react";

import MainTemplate from "./templates/MainTemplate";
import BurgerContextProvider from "./contexts/BurgerContext";

const App = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024 && window.innerWidth > window.innerHeight) {
        window.addEventListener("resize", () => {
          let vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty("--vh", `${vh}px`);
        });
      } else if (window.innerWidth < 1024) {
        window.addEventListener("orientationchange", () => {
          let vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty("--vh", `${vh}px`);
        });
      }
    });

    console.log(window.innerWidth > window.innerHeight);
  });
  return (
    <BurgerContextProvider>
      <MainTemplate />
    </BurgerContextProvider>
  );
};

export default App;
