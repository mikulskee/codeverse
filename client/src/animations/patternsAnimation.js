import { gsap, Power0 } from "gsap/all";

// export const headerAnimation = () => {
//   const pattern = document.querySelector(".header-pattern");
//   const tl = gsap.timeline();

//   tl.to(pattern, {
//     duration: 10,
//     x: 20,
//     y: -5,
//     rotate: 3,
//     repeat: -1,
//     ease: Power0.easeNone,
//     yoyo: true,
//     yoyoEase: true
//   });
// };
// export const skillsAnimation = () => {
//   const pattern = document.querySelector(".skills-pattern");
//   const tl = gsap.timeline();

//   tl.to(pattern, {
//     duration: 8,
//     x: 5,
//     y: -20,
//     rotate: 2,
//     repeat: -1,
//     ease: Power0.easeNone,
//     yoyo: true,
//     yoyoEase: true
//   });
// };

export const spaceship = () => {
  const rougeOne = document.querySelector(".spaceship");
  const rougeTwo = document.querySelector(".spaceship-2");

  const tl = gsap.timeline({ repeat: -1 });

  tl.from(rougeOne, { duration: 0.2, opacity: 0 })
    .from(
      rougeOne,
      {
        duration: 0.5,
        x: 300,
        y: -10,
        ease: Power0.easeNone
      },
      "-=0.2"
    )
    .to(rougeOne, { duration: 0.2, opacity: 0 }, "-=0.2")
    .from(rougeTwo, { duration: 0.2, opacity: 0, delay: 6 })
    .from(
      rougeTwo,
      {
        duration: 1,
        x: -200,
        y: 243,
        ease: Power0.easeNone
      },
      "-=0.2"
    )
    .to(rougeTwo, { duration: 0.3, opacity: 0 }, "-=0.3");
};
export const spaceship2 = () => {
  const rougeThree = document.querySelector(".spaceship-3");
  const rougeFour = document.querySelector(".spaceship-4");

  const tl = gsap.timeline({ repeat: -1 });
  tl.from(rougeThree, { duration: 0.1, opacity: 0, delay: 4 })
    .from(
      rougeThree,
      {
        duration: 0.6,
        x: -300,
        y: -80,
        ease: Power0.easeNone
      },
      "-=0.1"
    )
    .to(rougeThree, { duration: 0.1, opacity: 0 }, "-=0.1")
    .from(rougeFour, { duration: 0.1, opacity: 0, delay: 7 })
    .from(
      rougeFour,
      {
        duration: 0.5,
        x: 300,
        y: 45,
        ease: Power0.easeNone
      },
      "-=0.1"
    )
    .to(rougeFour, { duration: 0.1, opacity: 0 }, "-=0.1");
};

export const mandoAnimation = () => {
  const mando = document.querySelector(".mando-quote");

  const tl = gsap.timeline();

  tl.to(mando, { duration: 0.35, opacity: 0 });
};
