import { gsap, Power0 } from "gsap/all";

export const headerAnimation = () => {
  const pattern = document.querySelector(".header-pattern");
  const tl = gsap.timeline();

  tl.to(pattern, {
    duration: 10,
    x: 20,
    y: -5,
    rotate: 3,
    repeat: -1,
    ease: Power0.easeNone,
    yoyo: true,
    yoyoEase: true
  });
};
export const aboutAnimation = () => {
  const pattern = document.querySelector(".about-pattern");
  const tl = gsap.timeline();

  tl.to(pattern, {
    duration: 10,
    x: 5,
    y: -20,
    rotate: 2,
    repeat: -1,
    ease: Power0.easeNone,
    yoyo: true,
    yoyoEase: true
  });
};

export const spaceship = () => {
  const rougeOne = document.querySelector(".spaceship");
  const rougeTwo = document.querySelector(".spaceship-2");

  const tl = gsap.timeline({ repeat: -1 });

  tl.from(rougeOne, { duration: 8, opacity: 0 })
    .from(
      rougeOne,
      {
        duration: 20,
        x: 80,
        ease: Power0.easeNone
      },
      "-=8"
    )
    .to(rougeOne, { duration: 8, opacity: 0 }, "-=4")
    .from(rougeTwo, { duration: 8, opacity: 0 }, "-=3")
    .from(
      rougeTwo,
      {
        duration: 20,
        x: -60,
        y: 80,
        ease: Power0.easeNone
      },
      "-=8"
    )
    .to(rougeTwo, { duration: 8, opacity: 0 }, "-=4");
};
