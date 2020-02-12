import React, { useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { sectionTitleAnimation } from "../animations/sectionTitleAnimation";
import meAndBen from "../img/me-and-ben.jpg";
import starsPattern from "../img/stars-pattern.png";
import aboutMe from "../img/about-me.jpg";
import aboutMe2 from "../img/about-me2.png";

import stickerCap from "../img/sticker-2.png";
// import sticker3 from "../img/sticker-3.png";
// import sticker4 from "../img/sticker-4.png";
// import sticker5 from "../img/sticker-5.png";
import sticker6 from "../img/sticker-6.png";
import grill from "../img/grill.png";

const Wrapper = styled.section`
  padding: 80px 20px 0;
  background-image: url(${starsPattern});
  background-repeat: no-repeat;
  background-size: 95%;
  background-position: 644% 4%;
  overflow: hidden;
`;

const Poster = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  div.poster-image {
    position: relative;
    display: inline-block;
    ::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 102%;
      height: 102%;
      background: rgb(4, 5, 25);
      background: linear-gradient(
        -83deg,
        rgba(4, 5, 25, 1) 0%,
        rgba(4, 5, 25, 0.4) 45%
      );
    }
    img.ben {
      width: 150px;
      display: block;
    }
    .sticker6 {
      position: absolute;
      display: inline-block;
      background-image: url(${sticker6});
      background-size: contain;
      background-repeat: no-repeat;
      height: 230px;
      width: 230px;
      transform: translate(145px, -125px);
    }
  }

  .poster-description {
    position: relative;
    width: 45vw;
    font-weight: bold;
    transform: translate(-26%, 60%);
    z-index: 1;
    font-size: 18px;
    line-height: 1.5;
  }
`;

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-image: url(${starsPattern});
  background-repeat: no-repeat;
  background-size: 95%;
  background-position: 640% 37%;

  .sticker-captain {
    position: absolute;
    display: inline-block;
    background-image: url(${stickerCap});
    background-size: contain;
    background-repeat: no-repeat;
    height: 95px;
    width: 95px;
    right: 0;
    bottom: 0;
    transform: translate(70%, 0%);
  }
`;

const Description = styled.p`
  margin: 0 auto;
  position: relative;
  font-family: "Montserrat", sans-serif;
  color: #f2f2f2;
  display: block;
  font-size: 14px;
  line-height: 1.8;
  max-width: 320px;
  z-index: 1;
  pointer-events: none;

  a {
    font-family: "Montserrat", sans-serif;
    color: #f2f2f2;
    font-size: 14px;
    pointer-events: auto !important;
  }
  .icon {
    font-size: 14px;
  }

  &.second {
    margin-bottom: 40px;
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${starsPattern});
      background-repeat: no-repeat;
      background-size: 95%;
      background-position: 640% 166%;
    }
  }
`;

const Photos = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 60px;
  margin-left: -20px;
  margin: 100px 0 40px -20px;
  width: calc(100% + 40px);
  display: flex;

  ::after {
    content: "";
    position: absolute;
    width: 103%;
    height: 103%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(4, 5, 25);
    background: linear-gradient(
      0deg,
      rgba(4, 5, 25, 1) 0%,
      rgba(4, 5, 25, 0.4) 15%,
      rgba(4, 5, 25, 0.4) 85%,
      rgba(4, 5, 25, 1) 100%
    );
  }

  .photo {
    width: 50vw;
    height: 50vw;
    background-image: url(${aboutMe});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .photo:nth-child(2) {
    background-image: url(${aboutMe2});
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  position: relative;
  z-index: 2;
`;

const Grill = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% + 40px);
  height: 80vw;
  margin-bottom: 30px;
  background-position: center;
  background-image: url(${grill});
  background-size: contain;
  background-repeat: no-repeat;
`;

const AboutMe = () => {
  useEffect(() => {
    const title = document.querySelector(".about-me-section-title");
    let executed = false;
    window.addEventListener("scroll", () => {
      const height = window.innerHeight;
      const bottom = title.getBoundingClientRect().bottom;

      if (!executed && height >= bottom) {
        executed = true;
        sectionTitleAnimation(title);
      } else return;
    });
  });
  return (
    <Wrapper>
      <StyledSectionTitle className={"about-me-section-title section-title"}>
        about&nbsp;me
      </StyledSectionTitle>

      <Poster className="poster">
        <div className="poster-image">
          <img className="ben" src={meAndBen} alt="me with my dog" />
          <div className="sticker6" />
        </div>
        <Description className="poster-description">
          Hi, My name is Mateusz Mikulski and I am Frontend Developer living in{" "}
          Katowice.
        </Description>
      </Poster>
      <Photos>
        <div className="photo" />
        <div className="photo" />
      </Photos>
      <DescriptionContainer className="description-container">
        <Description>
          I started to learn <strong>programming</strong> a year and a half ago
          and got so involved that since then I spend <strong>every day</strong>{" "}
          learning. It definitely became my passion.
          <br />
          <strong>I love it</strong> &#x2764;.
        </Description>
        <div className="sticker-captain"></div>
      </DescriptionContainer>
      <Grill />
      <Description className="second">
        I have finance <strong>Ania</strong>, and I am owner of French bulldog
        named <strong>Benek</strong>.
        <br />I love sports. I love running, in fact I ran a{" "}
        <strong>half-marathon</strong> last year.
        <br />
        <br />I also love <strong>travelling</strong> with my friends.
        <br /> I make <strong>movies</strong> from our adventures. You can see
        them on my{" "}
        <a href="https://www.youtube.com/user/MikulskeeTV">Youtube channel</a>
        <span
          role="img"
          aria-label="backhand index pointing left"
          className="icon"
        >
          &#x1F448;
        </span>
        .
      </Description>

      {/*  I love sports. I love running, in fact I ran
        a half-marathon last year. It took me two hours. I was very
        proud of myself that day. It showed me that nothing is impossible, if
        you really want something and you try hard to do it, you will achieve
        success. I started to learn programming a year and a half ago and got so
        involved that since then I spend every day at least 2 hours a day
        learning. */}
    </Wrapper>
  );
};

export default AboutMe;
