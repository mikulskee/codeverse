import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import debounce from "lodash.debounce";
import {
  hideNav,
  showNav,
  closeBurgerAnimation
} from "../animations/contentAnimations";

const MainTemplate = () => {
  useEffect(() => {
    let oldScroll = window.pageYOffset;
    window.addEventListener(
      "scroll",
      debounce(() => {
        const newScroll = window.pageYOffset;
        if (oldScroll < newScroll) {
          oldScroll = window.pageYOffset;
          hideNav().play();
          closeBurgerAnimation().play();
        } else if (oldScroll > newScroll) {
          oldScroll = window.pageYOffset;
          showNav().play();
          closeBurgerAnimation().play();
        }
      }, 50)
    );
  });

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
