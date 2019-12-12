import { gsap, Power1 } from "gsap/all";
export const mainInAnimation = () => {
  const main = document.querySelector("main");
  const tl = gsap.timeline({});

  tl.to(
    main,
    {
      duration: 0.5,
      y: "0%",
      ease: Power1.easeOut
    },
    "-=0.499999999999"
  );
};
export const mainOutAnimation = () => {
  const main = document.querySelector("main");
  const tl = gsap.timeline({});

  tl.to(
    main,
    {
      duration: 0.5,
      y: "100%",
      ease: Power1.easeOut
    },
    "-=0.499999999999"
  );
};
export const headerOutAnimation = () => {
  const header = document.querySelector("header");
  const bgFront = document.querySelector(".bg-front");

  const tl = gsap.timeline({});

  tl.to(header, {
    duration: 0.5,
    opacity: 0,
    y: "-15%",
    ease: Power1.easeOut
  }).to(bgFront, { duration: 0.5, y: "-30%" }, "-=0.5");
};

export const headerInAnimation = () => {
  const header = document.querySelector("header");
  const bgFront = document.querySelector(".bg-front");

  const tl = gsap.timeline({});

  tl.to(header, {
    duration: 0.5,
    opacity: 1,
    y: "0%",
    ease: Power1.easeOut
  }).to(bgFront, { duration: 0.5, y: "0%" }, "-=0.5");
};
