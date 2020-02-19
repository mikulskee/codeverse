import { gsap, Power1 } from "gsap/all";

export const sectionTitleAnimation = props => {
  const title = props.querySelectorAll("span.anim-txt");
  const brackets = props.querySelectorAll("span.bracket");
  const originalTxt = [];
  title.forEach(span => {
    originalTxt.push(span.innerText);
  });
  title.forEach(span => {
    span.innerText = "";
  });

  const tl = gsap.timeline({ paused: true });

  tl.set(brackets, { visibility: "visible" })
    .staggerFrom(brackets, 0.25, {
      autoAlpha: 0,
      ease: Power1.easeIn
    })
    .staggerTo(brackets, 0.25, {
      x: 0,
      ease: Power1.easeIn,
      delay: -0.25
    });

  const signs = [
    "!",
    "@",
    "%",
    "#",
    "$",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "/",
    "-"
  ];

  for (let i = 0; i < originalTxt.length; i++) {
    let j = 0;
    let k = Math.floor(Math.random() * signs.length);
    title[i].classList.add("visible");
    const id = setInterval(() => {
      title[i].innerText = signs[Math.floor(Math.random() * signs.length)];
      if (j === k) {
        clearInterval(id);

        title[i].innerText = originalTxt[i];
      }
      j++;
    }, 80);
  }

  setTimeout(() => {
    tl.play();
  }, 800);
};
