import React, { useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { sectionTitleAnimation } from "../animations/sectionTitleAnimation";
import meAndBen from "../img/me-and-ben.jpg";
import starsPattern from "../img/stars-pattern.png";
import aboutMe from "../img/about-me.jpg";
import aboutMe2 from "../img/about-me2.png";
import logo80s from "../img/logo80s.png";
import sticker6 from "../img/sticker-6.png";
import grill from "../img/grill.png";

const Wrapper = styled.section`
  padding: 60px 20px 20px;
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
    transform: translateX(-50%);
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
      @media only screen and (min-width: 375px) {
        width: 180px;
      }
      @media only screen and (min-width: 1024px) {
        width: 250px;
      }
    }
    .sticker6 {
      position: absolute;
      display: inline-block;
      background-image: url(${sticker6});
      background-size: contain;
      background-repeat: no-repeat;
      height: 230px;
      width: 230px;
      transform: translate(125px, -125px);
      @media only screen and (min-width: 375px) {
        height: 290px;
        width: 290px;
        transform: translate(150px, -186px);
      }
      @media only screen and (min-width: 1024px) {
        height: 350px;
        width: 350px;
        transform: translate(220px, -227px);
      }
    }
  }

  .poster-description {
    position: absolute;
    width: 155px;
    font-weight: bold;
    transform: translate(20%, 60%);
    z-index: 1;
    font-size: 18px;
    line-height: 1.5;
    @media only screen and (min-width: 1024px) {
      font-size: 26px;
      width: 250px;
      transform: translate(96px, 83px);
    }
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
  @media only screen and (min-width: 1024px) {
    background-size: 46%;
    background-position: 120% 37%;
  }
`;

const Description = styled.p`
  margin: 0 auto;
  position: relative;
  font-family: "Montserrat", sans-serif;
  color: #f2f2f2;
  display: block;
  line-height: 1.8;
  max-width: 320px;
  z-index: 1;
  pointer-events: none;
  @media only screen and (min-width: 1024px) {
    max-width: 410px;
  }
  @media only screen and (min-width: 1500px) {
    padding: 40px 0;
  }

  a {
    font-family: "Montserrat", sans-serif;
    color: #f2f2f2;
    pointer-events: auto !important;
  }
  

    &, a, .icon{
      font-size: 14px;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 1024px) {
      font-size: 18px;
    }
    }
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
    background-position: center;
    @media only screen and (min-width: 768px) {
      height: 35vw;
    }
    @media only screen and (min-width: 1280px) {
      height: 30vw;
    }
  }
  .photo:nth-child(2) {
    background-image: url(${aboutMe2});
    @media only screen and (min-width: 768px) {
      background-position: top;
    }
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
  width: calc(209% + 40px);
  height: 60vw;
  margin-bottom: 30px;
  background-position: center;
  background-image: url(${grill});
  background-size: contain;
  background-repeat: no-repeat;
  @media only screen and (orientation: landscape) {
    width: calc(100% + 40px);
    height: 35vw;
  }
  @media only screen and (min-width: 768px) {
    width: calc(130% + 40px);
    height: 40vw;
  }
  @media only screen and (min-width: 1280px) {
    width: calc(100% + 40px);
    height: 37vw;
  }
`;

const Logo80s = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 15vw;
  background-position: center;
  background-image: url(${logo80s});
  background-size: contain;
  background-repeat: no-repeat;
  /* min-width: 1028px \/ */
  max-width: 730px;
  @media only screen and (orientation: landscape) {
    width: 70%;
  }
  @media only screen and (min-width: 736px) {
    width: 70%;
  }
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
    <Wrapper className="about-me">
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
      </DescriptionContainer>
      <Grill />
      <Description className="second">
        I have fiance <strong>Ania</strong>, and I am owner of French bulldog
        named <strong>Benek</strong>.
        <br />I love sports. I love running, in fact I ran a{" "}
        <strong>half-marathon</strong> last year.
        <br />
        <br />I also love <strong>travelling</strong> with my friends. I make{" "}
        <strong>movies</strong> from our adventures.
        <br /> You can see them on my{" "}
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
      <Logo80s />
    </Wrapper>
  );
};

export default AboutMe;
