import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import {
  hideNav,
  showNav,
  closeBurgerAnimation
} from "../animations/contentAnimations";

const MainTemplate = () => {
  useEffect(() => {
    let oldScroll = window.pageYOffset;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        const newScroll = window.pageYOffset;
        if (oldScroll < newScroll) {
          const topBar = document.querySelector(".top-bar");
          oldScroll = window.pageYOffset;

          if (topBar.classList.contains("hide")) {
            return;
          } else {
            hideNav().play();
            closeBurgerAnimation().play();
          }
        } else if (oldScroll > newScroll) {
          const topBar = document.querySelector(".top-bar");
          oldScroll = window.pageYOffset;
          if (topBar.classList.contains("hide")) {
            showNav().play();
            closeBurgerAnimation().play();
          } else {
            return;
          }
        }
      } else return;
    });
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Contact />
      <Footer />
    </>
  );
};

export default MainTemplate;
