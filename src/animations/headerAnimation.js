import { TimelineMax, Power0 } from "gsap/all";

export const headerAnimation = () => {
  const pattern = document.querySelector(".pattern");
  const tl = new TimelineMax();

  tl.to(pattern, 10, {
    x: 20,
    y: -5,
    rotate: 3,
    repeat: -1,
    ease: Power0.easeNone,
    yoyo: true,
    yoyoEase: true
  });
};
