import React, { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import {
  hideNav,
  showNav,
  closeBurgerAnimation,
  fadeInAnimation
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
          } else if (window.innerWidth < 1024) {
            hideNav().play();
            closeBurgerAnimation().play();
          }
        } else if (oldScroll > newScroll) {
          const topBar = document.querySelector(".top-bar");
          oldScroll = window.pageYOffset;
          if (topBar.classList.contains("hide")) {
            showNav().play();
            closeBurgerAnimation().play();
          } else return;
        }
      } else return;

      window.addEventListener("scroll", () => {
        if (
          Math.round(window.pageYOffset) + window.innerHeight ===
          Math.round(document.body.getBoundingClientRect().height)
        ) {
          showNav().play();
        }
      });
    });

    window.addEventListener("orientationchange", () => {
      showNav().play();
    });
  }, []);

  useEffect(() => {
    const fadeInContainers = document.querySelectorAll(".fade-in-container");

    fadeInContainers.forEach(container => {
      let executed = false;
      window.addEventListener("scroll", () => {
        const height = window.innerHeight;
        const middle = container.getBoundingClientRect().height / 2;
        const top = container.getBoundingClientRect().top + middle;

        if (!executed && height >= top) {
          executed = true;
          fadeInAnimation(container).play();
        } else return;
      });
    });
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
