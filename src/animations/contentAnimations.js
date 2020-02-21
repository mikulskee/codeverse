import { gsap, Power1 } from "gsap/all";

export const projectsSectionContentAnimation = () => {
  const projectsImages = document.querySelectorAll("ul .project");
  const projectsTitles = document.querySelectorAll("ul .project-title");
  const tl = gsap.timeline({ paused: true });

  tl.set(projectsImages, { visibility: "visible" })
    .set(projectsTitles, { visibility: "visible" })
    .staggerFrom(
      projectsImages,
      1,
      {
        y: 50,
        autoAlpha: 0,
        ease: Power1.easeOut
      },
      0.2
    )
    .staggerFrom(
      projectsTitles,
      0.7,
      {
        y: 50,
        autoAlpha: 0,
        ease: Power1.easeOut,
        delay: -1.5
      },
      0.2
    );

  return tl;
};

export const skillsSectionContentAnimation = () => {
  const skillsDescriptions = document.querySelectorAll("ul .skill");
  const borders = document.querySelectorAll("ul .border-line");
  const tl = gsap.timeline({ paused: true });

  tl.set(skillsDescriptions, { visibility: "visible" })
    .set(borders, { visibility: "visible" })
    .staggerFrom(
      skillsDescriptions,
      1,
      {
        y: 50,
        autoAlpha: 0,
        ease: Power1.easeOut
      },
      0.2
    )
    .staggerTo(
      borders,
      0.7,
      {
        x: 0,
        autoAlpha: 1,
        ease: Power1.easeOut,
        delay: -2
      },
      0.2
    );

  return tl;
};

export const footerContentAnimation = () => {
  const bgFooter = document.querySelectorAll("footer .bg");
  const tl = gsap.timeline({ paused: true });

  tl.to(bgFooter, 0.35, { scaleX: 0.95, scaleY: 0.93 });

  return tl;
};

export const openBurgerAnimation = () => {
  const ul = document.querySelector(".nav-list");
  const nav = document.querySelector("nav");
  nav.classList.remove("closed");

  const tl = gsap.timeline({ paused: true });
  tl.set(nav, { height: "auto" }).to(ul, 0.35, { translateY: 0 });
  return tl;
};
export const closeBurgerAnimation = () => {
  const ul = document.querySelector(".nav-list");
  const nav = document.querySelector("nav");
  nav.classList.add("closed");

  const tl = gsap.timeline({ paused: true });
  tl.set(nav, { height: 0 }).to(ul, 0.35, { translateY: "-120%" });
  return tl;
};

export const hideNav = () => {
  const nav = document.querySelector("nav");
  const tl = gsap.timeline({ paused: true });
  tl.to(nav, 0.7, { y: -150, ease: Power1.easeOut });
  return tl;
};
export const showNav = () => {
  const nav = document.querySelector("nav");
  const tl = gsap.timeline({ paused: true });
  tl.to(nav, 0.5, { y: 0, ease: Power1.easeOut });
  return tl;
};
