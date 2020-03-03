import React, { useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { sectionTitleAnimation } from "../animations/sectionTitleAnimation";
import { skillsSectionContentAnimation } from "../animations/contentAnimations";

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`;

const SkillsGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgb(4, 5, 25);
`;

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 60px 20px 20px;
`;

const SkillsDescription = styled.ul`
  list-style: none;
  margin: 50px -10px 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 50px;
  width: 85%;
  @media only screen and (orientation: landscape) {
    width: 80vw;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    margin: 50px auto 0;
  }
  @media only screen and (min-width: 1280px) {
    width: 820px;
  }

  li {
    position: relative;
    @media only screen and (min-width: 1024px) {
      width: 65%;
    }

    div.border-line {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      bottom: 10%;
      left: 0;
      background-color: #fff;
      opacity: 0.6;
      background: linear-gradient(-45deg, #da42ab, rgba(0, 0, 255, 0));
      filter: drop-shadow(0 0 6px #fff);
      transform: translateX(-100px);
      opacity: 0;
    }
  }

  li:nth-child(even) {
    align-self: flex-end;
    text-align: right;
    div.border-line {
      background: linear-gradient(45deg, #da42ab, rgba(0, 0, 255, 0));
      filter: drop-shadow(0 0 6px #fff);
      transform: translateX(100px);
    }
  }

  p {
    color: #f2f2f2;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 12px;
    margin: 20px;
    line-height: 1.4;
    @media only screen and (min-width: 375px) {
      font-size: 14px;
    }
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
    strong,
    span {
      font-size: 16px;
      @media only screen and (min-width: 375px) {
        font-size: 18px;
      }
      @media only screen and (min-width: 768px) {
        font-size: 20px;
      }
      @media only screen and (min-width: 1024px) {
        font-size: 24px;
      }
    }
  }

  p.rwd {
    text-align: left;
    @media only screen and (min-width: 1024px) {
      text-align: right;
    }
  }
`;

const NeonSign = styled.div`
  position: absolute;
  transform: skewY(-12deg) translate(0%, -50%);
  top: 50%;
  left: 5px;
  @media only screen and (min-width: 1024px) {
    left: 3vw;
  }

  h4 {
    opacity: 0;
    display: flex;
    flex-direction: column;
    &.visible {
      opacity: 1;
    }
  }
  span {
    height: 100px;
    @media only screen and (orientation: landscape) {
      height: 130px;
    }
    @media only screen and (min-width: 1024px) {
      height: 150px;
    }
    @media only screen and (min-width: 1366px) {
      height: 165px;
    }
  }
  h4,
  span {
    font-weight: 400;
    font-family: "Monoton";
    color: #00f4ff;
    font-size: 100px;
    @media only screen and (orientation: landscape) {
      font-size: 130px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 150px;
    }
    @media only screen and (min-width: 1366px) {
      font-size: 165px;
    }
  }

  span {
    @keyframes text-flicker-in-glow {
      0% {
        opacity: 0;
      }
      10% {
        opacity: 0;
        text-shadow: none;
      }
      10.1% {
        opacity: 1;
        text-shadow: none;
      }
      10.2% {
        opacity: 0;
        text-shadow: none;
      }
      20% {
        opacity: 0;
        text-shadow: none;
      }
      20.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
      }
      20.6% {
        opacity: 0;
        text-shadow: none;
      }
      30% {
        opacity: 0;
        text-shadow: none;
      }
      30.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      30.5% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      30.6% {
        opacity: 0;
        text-shadow: none;
      }
      45% {
        opacity: 0;
        text-shadow: none;
      }
      45.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      50% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      55% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
          0 0 60px rgba(255, 255, 255, 0.25);
      }
      55.1% {
        opacity: 0;
        text-shadow: none;
      }
      57% {
        opacity: 0;
        text-shadow: none;
      }
      57.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35);
      }
      60% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35);
      }
      60.1% {
        opacity: 0;
        text-shadow: none;
      }
      65% {
        opacity: 0;
        text-shadow: none;
      }
      65.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      75% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      75.1% {
        opacity: 0;
        text-shadow: none;
      }
      77% {
        opacity: 0;
        text-shadow: none;
      }
      77.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      85% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
          0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      85.1% {
        opacity: 0;
        text-shadow: none;
      }
      86% {
        opacity: 0;
        text-shadow: none;
      }
      86.1% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
          0 0 60px rgba(255, 255, 255, 0.45),
          0 0 110px rgba(255, 255, 255, 0.25),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
      100% {
        opacity: 1;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
          0 0 60px rgba(255, 255, 255, 0.45),
          0 0 110px rgba(255, 255, 255, 0.25),
          0 0 100px rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

const Skills = () => {
  const blinking = () => {
    const target = document.querySelector("div.neon h4");

    const flickerLetter = letter =>
      `<span style="animation: text-flicker-in-glow ${Math.random() *
        4}s linear both ">${letter}</span>`;

    const flickerText = text =>
      text
        .split("")
        .map(flickerLetter)
        .join("");

    const neonGlory = target => {
      target.classList.add("visible");
      target.innerHTML = flickerText(target.textContent);
    };

    neonGlory(target);
  };

  useEffect(() => {
    const title = document.querySelector(".skills-section-title");
    const neon = document.querySelector("div.neon");
    const timeline = skillsSectionContentAnimation();
    let executed = false;
    let executedNeon = false;

    window.addEventListener("scroll", () => {
      const height = window.innerHeight;
      const bottom = title.getBoundingClientRect().bottom;
      const topNeon = neon.getBoundingClientRect().top;

      if (!executed && height >= bottom) {
        executed = true;
        timeline.play();
        sectionTitleAnimation(title);
      }
      if (!executedNeon && height >= topNeon) {
        executedNeon = true;
        blinking();
      }
    });
  });

  return (
    <Wrapper className="skills">
      <SkillsGradient />
      <Content>
        <NeonSign className="neon">
          <h4>skills</h4>
        </NeonSign>
        <SectionTitle className={"skills-section-title section-title"}>
          skills
        </SectionTitle>

        <SkillsDescription>
          <li>
            <p className="react skill">
              main technology - <strong>React</strong>{" "}
              <span role="img" aria-label="atom">
                &#x269B;
              </span>
              <br /> (including hooks){" "}
            </p>
            <div className="border-line" />
          </li>
          <li>
            <p className="styled-components skill">
              writing styles in <br />
              <strong>styled-components</strong>{" "}
              <span role="img" aria-label="nail polish">
                &#x1F485;
              </span>
            </p>
            <div className="border-line" />
          </li>

          <li>
            <p className="design skill">
              designing layouts in <br />
              <strong>Adobe XD,</strong> <strong>Adobe Illustrator</strong>
              <br /> and <strong>Figma </strong>
              <span role="img" aria-label="man artist">
                &#x1F3A8;
              </span>
            </p>
            <div className="border-line" />
          </li>
          <li>
            <p className="gsap skill">
              animations in <br />
              <strong>gsap </strong>
              <span role="img" aria-label="nail polish">
                &#x1F939;
              </span>
            </p>
            <div className="border-line" />
          </li>
          <li>
            <p className="redux skill">
              basics of <strong>Redux </strong>
              <span role="img" aria-label="nail polish">
                &#x1F44A;
              </span>
            </p>
            <div className="border-line" />
          </li>
          <li>
            <p className="hooks skill">
              prefer keeping state with help of <br />
              <strong>createContext</strong> and <strong>useState </strong>
              <span role="img" aria-label="nail polish">
                &#x1F91D;
              </span>
            </p>
            <div className="border-line" />
          </li>
          <li>
            <p className="html skill">
              writing semantic <br />
              <strong>html </strong>
              <span role="img" aria-label="keyboard">
                &#x2328;
              </span>
            </p>
            <div className="border-line" />
          </li>
          <li>
            <p className="rwd skill">
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
            <div className="border-line" />
          </li>
          <li>
            <p className="react-native skill">
              basics of <br />
              <strong>react native </strong>
              <span role="img" aria-label="selfie">
                &#x1F933;
              </span>
            </p>
            <div className="border-line" />
          </li>
          <li>
            <p className="git skill">
              tracking changes in code with
              <br /> <strong>GIT </strong>
              <span role="img" aria-label="card file box">
                &#x1F5C3;
              </span>
            </p>
            <div className="border-line" />
          </li>
        </SkillsDescription>
      </Content>
    </Wrapper>
  );
};

export default Skills;
