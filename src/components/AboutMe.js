import React, { useEffect } from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { sectionTitleAnimation } from "../animations/sectionTitleAnimation";
import {
  aboutSectionDescriptionAnimation,
  descriptionAnimation,
  logo80sAnimation,
  grillAnimation,
  photoGalleryAnimation
} from "../animations/contentAnimations";
import me1 from "../img/me-1_1.jpg";
import me2 from "../img/me-2_1.jpg";
import me3 from "../img/me-3_1.jpg";
import starsPattern from "../img/stars-pattern.png";
import aboutMe from "../img/about-me_1.jpg";
import aboutMe2 from "../img/about-me2_1.jpg";
import logo80s from "../img/logo80s.jpg";
import sticker6 from "../img/sticker-6_1.png";
import grill from "../img/grill.jpg";
import PhotoGallery from "./PhotoGallery";

const Wrapper = styled.section`
  padding: 60px 20px 20px;
  overflow: hidden;
`;
const StyledSectionTitle = styled(SectionTitle)`
  position: relative;
  z-index: 2;
`;
const Poster = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  @media only screen and (min-width: 1024px) {
    margin-top: 80px;
  }

  div.poster-image {
    position: relative;
    display: inline-block;
    transform: translateX(-50%);
    visibility: hidden;
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
        rgba(4, 5, 25, 0.25) 45%
      );
    }
    img.me-poster {
      width: 150px;
      display: block;

      @media only screen and (min-width: 375px) {
        width: 180px;
      }
      @media only screen and (min-width: 768px) {
        width: 230px;
      }
      @media only screen and (min-width: 1024px) {
        width: 250px;
      }
      @media only screen and (min-width: 1366px) {
        width: 290px;
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
      @media only screen and (min-width: 768px) {
        height: 320px;
        width: 320px;
        transform: translate(201px, -216px);
      }
      @media only screen and (min-width: 1024px) {
        height: 350px;
        width: 350px;
        transform: translate(220px, -227px);
      }
      @media only screen and (min-width: 1366px) {
        height: 400px;
        width: 400px;
        transform: translate(260px, -321px);
      }
    }
  }

  .poster-description {
    position: absolute;
    width: 155px;
    font-weight: bold;
    transform: translate(53px, 60px);
    z-index: 1;
    font-size: 18px;
    line-height: 1.5;
    text-shadow: none;
    overflow: hidden;
    visibility: hidden;
    @media only screen and (min-width: 375px) {
      font-size: 21px;
      width: 180px;
      transform: translate(61px, 60px);
    }
    @media only screen and (min-width: 768px) {
      font-size: 26px;
      width: 223px;
      transform: translate(82px, 94px);
    }
    @media only screen and (min-width: 1024px) {
      font-size: 26px;
      width: 250px;
      transform: translate(96px, 83px);
    }
    @media only screen and (min-width: 1366px) {
      font-size: 29px;
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
  @media only screen and (min-width: 1024px) {
    overflow: visible;
    justify-content: center;
  }

  .photo {
    position: relative;
    width: 50vw;
    height: 50vw;
    background-image: url(${aboutMe});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    max-width: 500px;
    max-height: 500px;
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 103%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgb(4, 5, 25);
      background: linear-gradient(
        0deg,
        rgba(4, 5, 25, 1) 0%,
        rgba(4, 5, 25, 0.35) 15%,
        rgba(4, 5, 25, 0.35) 85%,
        rgba(4, 5, 25, 1) 100%
      );
    }
    @media only screen and (min-width: 768px) {
      height: 35vw;
    }
    @media only screen and (min-width: 1024px) {
      height: 370px;
      width: 370px;
      transform: translate(41px, -100px);
    }
    @media only screen and (min-width: 1366px) {
      height: 420px;
      width: 420px;
    }
  }
  .photo:nth-child(2) {
    background-image: url(${aboutMe2});
    @media only screen and (min-width: 768px) {
      background-position: top;
    }
    @media only screen and (min-width: 1024px) {
      transform: translate(28px, 0px);
    }
    @media only screen and (min-width: 1366px) {
      transform: translate(28px, -25px);
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
  align-items: center;
  @media only screen and (min-width: 1024px) {
    background-size: 46%;
    background-position: 120% 37%;
    margin: 50px 0;
  }
  @media only screen and (min-width: 1366px) {
    margin-left: 13%;
    justify-content: flex-start;
  }
  div.cover {
    position: relative;
    visibility: hidden;
    ::after {
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
        rgba(4, 5, 25, 0.25) 45%
      );
    }
    img {
      position: relative;
      display: none;
      width: 0;
      @media only screen and (min-width: 1024px) {
        display: block;
        width: 345px;
      }
      @media only screen and (min-width: 1366px) {
        width: 410px;
      }
    }
  }

  &.second {
    @media only screen and (min-width: 1024px) {
      background-position: -12% 37%;
    }
    @media only screen and (min-width: 1366px) {
      justify-content: flex-end;
    }
    div.cover {
      @media only screen and (min-width: 1366px) {
        margin-right: 13%;
      }
      ::after {
        background: linear-gradient(
          -270deg,
          rgba(4, 5, 25, 1) 0%,
          rgba(4, 5, 25, 0.25) 45%
        );
      }
    }
    img {
      width: 275px;
    }
  }
  &.third {
    margin-left: auto;
    justify-content: center;
  }
`;

const Description = styled.p`
  margin: 0 auto;
  position: relative;
  font-family: "Montserrat", sans-serif;
  color: #f2f2f2;
  display: block;
  line-height: 1.8;
  width: 320px;
  z-index: 1;
  pointer-events: none;
  visibility: hidden;
  @media only screen and (min-width: 1024px) {
    width: 410px;
    margin: 0;
    margin-left: -20px;
  }
  @media only screen and (min-width: 1366px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1500px) {
    padding: 40px 0;
  }

  a {
    font-family: "Montserrat", sans-serif;
    color: #f2f2f2;
    pointer-events: auto !important;
  }
  .icon {
    font-size: 14px;
    @media only screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  &.second {
    @media only screen and (min-width: 1024px) {
      margin-right: -70px;
    }

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &.third {
    margin: 0 auto;
    width: 80%;
    max-width: 825px;

    @media only screen and (min-width: 1024px) {
      font-size: 20px;
      .icon {
        font-size: 26px;
      }
    }
    @media only screen and (min-width: 1366px) {
      font-size: 24px;
      .icon {
        font-size: 30px;
      }
    }
  }
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
  max-height: 700px;
  visibility: hidden;
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
  max-height: 200px;
  max-width: 730px;
  margin: 40px 0;
  visibility: hidden;
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

  useEffect(() => {
    const description = document.querySelector(".poster-description");
    let executed = false;

    window.addEventListener("scroll", () => {
      const height = window.innerHeight;
      const top = description.getBoundingClientRect().top;

      if (!executed && height >= top) {
        executed = true;
        aboutSectionDescriptionAnimation().play();
      } else return;
    });
  });

  useEffect(() => {
    const des = document.querySelectorAll(".description-container");
    des.forEach(d => {
      let executed = false;
      window.addEventListener("scroll", () => {
        const height = window.innerHeight;
        const top = d.getBoundingClientRect().top + 20;

        if (!executed && height >= top) {
          console.log("lecimy");

          executed = true;
          descriptionAnimation(d).play();
        } else return;
      });
    });
  });

  useEffect(() => {
    const logo = document.querySelector(".logo80s");
    let executed = false;

    window.addEventListener("scroll", () => {
      const height = window.innerHeight;
      const top = logo.getBoundingClientRect().bottom;

      if (!executed && height >= top) {
        executed = true;
        logo80sAnimation().play();
      } else return;
    });
  });
  useEffect(() => {
    const grill = document.querySelector(".grill");
    let executed = false;

    window.addEventListener("scroll", () => {
      const height = window.innerHeight;
      const top = grill.getBoundingClientRect().bottom;

      if (!executed && height >= top) {
        executed = true;
        grillAnimation().play();
      } else return;
    });
  });
  useEffect(() => {
    const imagesFromGallery = document.querySelectorAll(".photo-gallery a");

    imagesFromGallery.forEach(img => {
      let executed = false;

      window.addEventListener("scroll", () => {
        const height = window.innerHeight;
        const top = img.getBoundingClientRect().bottom;

        if (!executed && height >= top) {
          executed = true;
          photoGalleryAnimation(img).play();
        } else return;
      });
    });
  });
  return (
    <Wrapper className="about-me">
      <StyledSectionTitle className={"about-me-section-title section-title"}>
        about&nbsp;me
      </StyledSectionTitle>

      <Poster className="poster ">
        <div className="poster-image fade-in">
          <img className="me-poster" src={me1} alt="me coding" />
          <div className="sticker6 fade-in-sticker" />
        </div>
        <Description className="poster-description fade-in">
          Hi, My name is Mateusz Mikulski and I am Frontend Developer living in{" "}
          Katowice.
        </Description>
      </Poster>
      <Photos>
        <div className="photo" />
        <div className="photo" />
      </Photos>

      <DescriptionContainer className="description-container">
        <div className="cover fade-in">
          <img src={me2} alt="me coding" />
        </div>
        <Description className="fade-in">
          I started to learn <strong>programming</strong> a year and a half ago
          and got so involved that since then I spend <strong>every day</strong>{" "}
          learning. It definitely became my passion.
          <br />
          <strong>I love it</strong> &#x2764;.
        </Description>
      </DescriptionContainer>
      <Grill className="grill" />

      <DescriptionContainer className="description-container second">
        <Description className="second fade-in">
          I have fiance <strong>Ania</strong>, and I am owner of French bulldog
          named <strong>Benek</strong>.
          <br />
          <br /> I love the <strong>Netflix</strong> series,{" "}
          <strong>The Office</strong> series, Andrzej Sapkowski's books from the{" "}
          <strong>Witcher</strong> universe, the <strong>Star Wars</strong>{" "}
          saga, movies from the <strong>Marvel Cinematic Universe</strong> and
          playing video games on my <strong>PlayStation</strong>.
          <br />
          <br />
          I'm passionate about sports. I've recently become crazy about running,
          in fact I ran a<strong> half-marathon</strong> last year.
        </Description>
        <div className="cover fade-in">
          <img src={me3} alt="me coding" />
        </div>
      </DescriptionContainer>
      <Logo80s className="logo80s" />
      <DescriptionContainer className="description-container third">
        <Description className="third fade-in">
          Apart from coding, I enjoy <strong>taking photos</strong>, go on road
          trips around my country and abroad, and <strong>travel</strong> with
          my backpack and my friends.
          <br />
          <br />I also make <strong>movies</strong> from our adventures.
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
          <br />
          <br />
          Below a few photos from our trips{" "}
          <span
            role="img"
            aria-label="backhand index pointing down"
            className="icon"
          >
            &#x1F447;
          </span>
          <br />
          <span className="little">(click on them to see location...)</span>
        </Description>
      </DescriptionContainer>
      <PhotoGallery />
    </Wrapper>
  );
};

export default AboutMe;
