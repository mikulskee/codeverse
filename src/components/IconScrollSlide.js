import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { gsap, Power1 } from "gsap/all";

const Icon = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(calc(-50% + 20px));
  color: #f2f2f2;
  font-size: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  opacity: 0;
  @media only screen and (orientation: landscape) {
    font-size: 22px;
  }

  svg {
    transform: translateY(0) rotate(-115deg);
  }

  div.line-icon {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    display: block;
    width: 2px;
    height: 0%;
    background-color: #fff;
    background: linear-gradient(-45deg, #fff, rgba(0, 0, 255, 0));
    filter: drop-shadow(0 0 6px #699bff);
  }
`;

const Animation = () => {
  const hand = document.querySelector(".hand-icon");
  const line = document.querySelector(".line-icon");
  const container = document.querySelector(".icon-container");

  const tl = gsap.timeline({ repeat: -1 });

  tl.to(container, { duration: 0.4, opacity: 1, delay: 1.5 })
    .to(hand, {
      duration: 1.5,
      y: -20,
      ease: Power1.easeOut
    })
    .to(line, { duration: 1.5, height: "60%" }, "-=1.5")
    .to(container, { duration: 0.25, opacity: 0 });
};

const KillAnimation = () => {
  const hand = document.querySelector(".hand-icon");
  const line = document.querySelector(".line-icon");
  const container = document.querySelector(".icon-container");
  const tl = gsap.timeline();

  tl.to(container, { duration: 0.35, opacity: 0 })
    .to(hand, { duration: 0.35, opacity: 0 }, "-=0.35")
    .to(line, { duration: 0.35, opacity: 0 }, "-=0.35");
};

const IconScrollSlide = () => {
  useEffect(() => {
    Animation();
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        KillAnimation();
      }
    });
  }, []);

  return (
    <Icon className={"icon-container"}>
      <FontAwesomeIcon className={"hand-icon"} icon={faHandPointUp} />
      <div className="line-icon" />
    </Icon>
  );
};

export default IconScrollSlide;
