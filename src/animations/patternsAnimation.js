import { gsap } from "gsap/all";

export const mandoAnimation = () => {
  const mando = document.querySelector(".mando-quote");

  const tl = gsap.timeline();

  tl.to(mando, { duration: 0.35, opacity: 0 });
};
