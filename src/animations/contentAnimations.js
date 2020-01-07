import { gsap, Power1 } from "gsap/all";

export const projectsSectionContentAnimation = () => {
  const sectionTitle = document.querySelector(".projects-section-title");
  const projectsImages = document.querySelectorAll("ul .project");
  const projectsTitles = document.querySelectorAll("ul .project-title");
  const tl = gsap.timeline({ paused: true });

  tl.set(sectionTitle, { visibility: "visible" })
    .set(projectsImages, { visibility: "visible" })
    .set(projectsTitles, { visibility: "visible" })
    .from(sectionTitle, {
      duration: 1,
      y: 50,
      autoAlpha: 0,
      ease: Power1.easeOut
    })
    .staggerFrom(
      projectsImages,
      1,
      {
        y: 50,
        autoAlpha: 0,
        ease: Power1.easeOut,
        delay: -1
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
