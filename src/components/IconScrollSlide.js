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

  tl.from(container, { duration: 0.4, opacity: 0, delay: 1.5 })
    .to(hand, {
      duration: 1.5,
      y: -30,
      ease: Power1.easeOut
    })
    .to(line, { duration: 1.5, height: "74%" }, "-=1.5")
    .to(container, { duration: 0.25, opacity: 0 });
};

const IconScrollSlide = () => {
  useEffect(() => {
    Animation();
  }, []);

  return (
    <Icon className={"icon-container"}>
      <FontAwesomeIcon className={"hand-icon"} icon={faHandPointUp} />
      <div className="line-icon" />
    </Icon>
  );
};

export default IconScrollSlide;
