import { gsap, Power1 } from "gsap/all";
import { Power4 } from "gsap/all";

export const footerContentAnimation = () => {
  const bgFooter = document.querySelectorAll("footer .bg");
  const tl = gsap.timeline({ paused: true });

  tl.to(bgFooter, 0.5, { scaleX: 0.95, scaleY: 0.93 });

  return tl;
};

export const openBurgerAnimation = () => {
  const ul = document.querySelector(".nav-list");
  const nav = document.querySelector("nav");
  const burgerBars = document.querySelectorAll(".burger .bar");
  nav.classList.remove("closed");

  const tl = gsap.timeline({ paused: true });
  tl.set(nav, { height: "auto" })
    .to(ul, 0.35, { translateY: 0 })
    .to(burgerBars[1], { duration: 0.2, autoAlpha: 0 }, "-=0.35")
    .to(burgerBars[0], { y: 9, duration: 0.2 }, "-=0.35")
    .to(burgerBars[2], { y: -9, duration: 0.2 }, "-=0.35")
    .to(burgerBars[0], { rotate: 135, duration: 0.4 }, "-=0.3")
    .to(burgerBars[2], { rotate: 225, duration: 0.4 }, "-=0.4");
  return tl;
};
export const closeBurgerAnimation = () => {
  const ul = document.querySelector(".nav-list");
  const nav = document.querySelector("nav");
  const burgerBars = document.querySelectorAll(".burger .bar");

  nav.classList.add("closed");

  const tl = gsap.timeline({ paused: true });
  tl.set(nav, { height: 0 })
    .to(ul, 0.35, { translateY: "-120%" })
    .to(burgerBars[0], { rotate: 0, duration: 0.2 }, "-=0.35")
    .to(burgerBars[2], { rotate: -0, duration: 0.2 }, "-=0.35")
    .to(burgerBars[0], { y: 0, duration: 0.2 })
    .to(burgerBars[2], { y: 0, duration: 0.2 }, "-=0.2")
    .to(burgerBars[1], { duration: 0.1, autoAlpha: 1 }, "-=0.2");

  return tl;
};

export const hideNav = () => {
  const nav = document.querySelector("nav");
  const topBar = document.querySelector(".top-bar");
  topBar.classList.add("hide");
  const tl = gsap.timeline({ paused: true });
  tl.to(nav, 0.35, { y: -150, ease: Power1.easeIn });
  return tl;
};
export const showNav = () => {
  const nav = document.querySelector("nav");
  const topBar = document.querySelector(".top-bar");

  topBar.classList.remove("hide");

  const tl = gsap.timeline({ paused: true });
  tl.to(nav, 0.35, { y: 0, ease: Power1.easeOut });
  return tl;
};

export const aboutSectionDescriptionAnimation = () => {
  const description = document.querySelectorAll(
    ".about-me div.poster .fade-in"
  );
  const sticker = document.querySelectorAll(".fade-in-sticker");
  const tl = gsap.timeline({ paused: true });

  tl.set(description, { visibility: "visible" })
    .staggerFrom(
      description,
      1,
      {
        y: "50px",
        autoAlpha: 0,
        ease: Power1.easeOut
      },
      0.2
    )
    .from(sticker, 0.7, {
      y: "50px",
      autoAlpha: 0,
      ease: "steps(10)",
      delay: -0.4
    });

  return tl;
};

export const stepsAnimation = element => {
  const tl = gsap.timeline({ paused: true });

  tl.set(element, { visibility: "visible" }).from(element, 1, {
    rotateX: "90deg",
    ease: "steps(8)"
  });
  return tl;
};

export const fadeInAnimation = props => {
  const firstElement = props.querySelector(".first-element-fade-in");
  const secondElement = props.querySelector(".second-element-fade-in");
  const tl = gsap.timeline({ paused: true });
  if (props.classList.contains("fade-left")) {
    tl.set(firstElement, { visibility: "visible" })
      .set(secondElement, { visibility: "visible" })
      .from(firstElement, 1, {
        y: 50,
        autoAlpha: 0,
        ease: Power1.easeOut
      })
      .to(secondElement, 0.7, {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: -0.5
      });
    return tl;
  } else if (!firstElement) {
    tl.set(secondElement, { visibility: "visible" }).from(secondElement, 1.3, {
      y: 50,
      autoAlpha: 0,
      ease: Power1.easeOut
    });
    return tl;
  } else {
    tl.set(firstElement, { visibility: "visible" })
      .set(secondElement, { visibility: "visible" })
      .from(firstElement, 1.3, {
        y: -150,
        autoAlpha: 0,
        ease: Power1.easeOut
      })
      .from(secondElement, 1.3, {
        y: 50,
        autoAlpha: 0,
        ease: Power1.easeOut,
        delay: -1
      });
    return tl;
  }
};

export const headerAnimation = element => {
  const tl = gsap.timeline({ paused: true, ease: Power4.easeOut });
  const triangles = document.querySelectorAll(".trianglesSVG");

  gsap.set([triangles, element], { visibility: "visible" });
  tl.fromTo(
    element,
    {
      y: 50,
      autoAlpha: 0
    },
    {
      y: 0,
      autoAlpha: 1,

      delay: 0.7,
      duration: 1.5
    }
  )
    .fromTo(
      triangles[0],
      1,
      {
        rotation: -20,
        autoAlpha: 0
      },
      {
        rotation: 5,
        autoAlpha: 1
      },
      "-=1"
    )
    .fromTo(
      triangles[1],
      1,
      {
        rotation: -20,
        autoAlpha: 0
      },
      {
        rotation: 0,
        autoAlpha: 1
      },
      "-=0.8"
    )
    .fromTo(
      triangles[2],
      1,
      {
        rotation: -20,
        autoAlpha: 0
      },
      {
        rotation: -5,
        autoAlpha: 1
      },
      "-=0.8"
    );

  return tl;
};
