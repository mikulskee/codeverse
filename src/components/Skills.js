import React, { useEffect } from "react";
import styled from "styled-components";
import { SectionTitle } from "./SectionTitle";
import skillsBg from "../img/skills-bg.jpg";
import {
  skillsAnimation,
  spaceship,
  spaceship2
} from "../animations/patternsAnimation";

const Wrapper = styled.section`
  overflow: hidden;
  transform: translate(0);

  .spaceship-2 {
    top: auto;
    bottom: 20%;
    left: 80%;
    transform: rotate(220deg);
  }

  .spaceship-3 {
    top: auto;
    bottom: 50%;
    left: 90%;
    transform: rotate(286deg);
    height: 120px;
  }
  .spaceship-4 {
    top: auto;
    bottom: 27%;
    left: 20%;
    height: 80px;
    transform: rotate(98deg);
  }
`;

const SkillsPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: scale(1.25);
  background-image: url(${skillsBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const SkillsGradient = styled.div`
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
    rgba(4, 5, 25, 0.7) 30%,
    rgba(4, 5, 25, 0.7) 75%,
    rgba(4, 5, 25, 1) 100%
  );
`;

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 60px 20px 0;
`;

const Spaceship = styled.div`
  position: absolute;
  top: 17px;
  right: 80%;
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

const SkillsDescription = styled.ul`
  list-style: none;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      bottom: 15%;
      left: 0;
      background-color: #fff;
      opacity: 0.6;
      background: linear-gradient(-45deg, #fff, rgba(0, 0, 255, 0));
      filter: drop-shadow(0 0 6px #699bff);
    }
  }

  li:nth-child(even) {
    align-self: flex-end;
    text-align: right;
    &::after {
      background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #fff);
      filter: drop-shadow(0 0 6px #699bff);
    }
  }

  p {
    color: #f2f2f2;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 13px;
    margin: 20px;
    line-height: 1.4;
    strong,
    span {
      font-size: 18px;
    }
  }

  p.rwd {
    text-align: left;
  }
  /* p.react strong {
    color: #53c1de;
  }
  p.styled-components strong {
    color: #d180c2;
  }
  p.gsap strong {
    color: #83c801;
  }
  p.redux strong {
    color: #7347b7;
  }
  p.hooks strong {
    color: #4aacc2;
  }
  p.html strong {
    color: #eb6228;
  }
  p.rwd strong {
    color: #2762ea;
  }
  p.react-native strong {
    color: #53c1de;
  }
  p.git strong {
    color: #ea4e32;
  } */
`;

const Skills = () => {
  useEffect(() => {
    skillsAnimation();
    spaceship();
    spaceship2();
  });
  return (
    <Wrapper className="skills">
      <SkillsPattern className="skills-pattern" />
      <SkillsGradient />
      <Spaceship className="spaceship" />
      <Spaceship className="spaceship-2" />
      <Spaceship className="spaceship-3" />
      <Spaceship className="spaceship-4" />
      <Content>
        <SectionTitle className={"section-title"}>
          <span>{"{  "}</span>skills<span>{"  }"}</span>
        </SectionTitle>
        <SkillsDescription>
          <li>
            <p className="react">
              main technology - <strong>React</strong>{" "}
              <span role="img" aria-label="atom">
                &#x269B;
              </span>
              <br /> (including hooks){" "}
            </p>
          </li>
          <li>
            <p className="styled-components">
              writing styles in <br />
              <strong>styled-components</strong>{" "}
              <span role="img" aria-label="nail polish">
                &#x1F485;
              </span>
            </p>
          </li>

          <li>
            <p className="gsap">
              animations in <br />
              <strong>gsap </strong>
              <span role="img" aria-label="nail polish">
                &#x1F939;
              </span>
            </p>
          </li>
          <li>
            <p className="redux">
              basics of <strong>Redux </strong>
              <span role="img" aria-label="nail polish">
                &#x1F44A;
              </span>
            </p>
          </li>
          <li>
            <p className="hooks">
              prefer keeping state with help of <br />
              <strong>createContext</strong> and <strong>useState </strong>
              <span role="img" aria-label="nail polish">
                &#x1F91D;
              </span>
            </p>
          </li>
          <li>
            <p className="html">
              writing semantic <br />
              <strong>html </strong>
              <span role="img" aria-label="keyboard">
                &#x2328;
              </span>
            </p>
          </li>
          <li>
            <p className="rwd">
              <strong>R</strong>esponsive{" "}
              <span role="img" aria-label="desktop computer">
                &#x1F5A5;
              </span>
              <br />
              <strong>W</strong>eb{" "}
              <span role="img" aria-label="laptop">
                &#x1F4BB;
              </span>
              <br />
              <strong>D</strong>
              esign{" "}
              <span role="img" aria-label="mobile phone">
                &#x1F4F1;
              </span>
            </p>
          </li>
          <li>
            <p className="react-native">
              basics of <br />
              <strong>react native </strong>
              <span role="img" aria-label="selfie">
                &#x1F933;
              </span>
            </p>
          </li>
          <li>
            <p className="git">
              tracking changes in code with
              <br /> <strong>GIT </strong>
              <span role="img" aria-label="card file box">
                &#x1F5C3;
              </span>
            </p>
          </li>
        </SkillsDescription>
      </Content>
    </Wrapper>
  );
};

export default Skills;
