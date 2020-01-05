import React, { useEffect } from "react";
import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";
import aboutBg from "../img/about-bg.jpg";
import { aboutAnimation, spaceship } from "../animations/patternsAnimation";

const Wrapper = styled.section`
  height: 110vh;
  height: calc(var(--vh, 1vh) * 110);
  overflow: hidden;
  transform: translate(0);

  .spaceship-2 {
    top: auto;
    bottom: 0px;
    left: 50px;
    transform: rotate(220deg);
  }
`;

const AboutPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: scale(1.25);
  background-image: url(${aboutBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const AboutGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(4, 5, 25);
  background: linear-gradient(
    180deg,
    rgba(4, 5, 25, 1) 0%,
    rgba(4, 5, 25, 1) 10%,
    rgba(4, 5, 25, 0.4) 30%,
    rgba(4, 5, 25, 0.4) 75%,
    rgba(4, 5, 25, 1) 100%
  );
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 60px 20px 0;
`;

const Spaceship = styled.div`
  position: absolute;
  top: 17px;
  right: 98px;
  opacity: 0.3;
  content: "";
  display: block;
  width: 2px;
  height: 230px;
  transform: rotate(88deg);
  background-color: #fff;
  background: linear-gradient(-45deg, #fff, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px #699bff);
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
  }
`;

const About = () => {
  useEffect(() => {
    aboutAnimation();
    spaceship();
  });
  return (
    <Wrapper className="about">
      <AboutPattern className="about-pattern" />
      <AboutGradient />
      <Spaceship className="spaceship" />
      <Spaceship className="spaceship-2" />
      <Content>
        <SectionTitle className={"section-title"}>
          <span>{"{  "}</span>About<span>{"  }"}</span>
        </SectionTitle>
      </Content>
    </Wrapper>
  );
};

export default About;
