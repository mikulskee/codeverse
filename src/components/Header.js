import React, { useEffect } from "react";
import styled from "styled-components";
import headerBg from "../img/header-bg_1.jpg";
import IconScrollSlide from "./IconScrollSlide";
import { mandoAnimation } from "../animations/patternsAnimation";
import { headerAnimation } from "../animations/contentAnimations";
import { ReactComponent as Traingle1 } from "../img/triangle-1.svg";
import { ReactComponent as Traingle2 } from "../img/triangle-2.svg";
import { ReactComponent as Traingle3 } from "../img/triangle-3.svg";

const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transform: translate(0);
  height: 110vh;
  min-height: 360px;
  height: calc(var(--vh, 1vh) * 110);
  overflow: hidden;
  background-image: url(${headerBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 1920px;
  max-height: 1300px;
  margin: 0 auto;

  .bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .vertical {
    background: rgb(4, 5, 25);
    background: linear-gradient(
      180deg,
      rgba(4, 5, 25, 0.7) 0%,
      rgba(4, 5, 25, 0.7) 5%,
      rgba(4, 5, 25, 0.7) 15%,
      rgba(4, 5, 25, 0.4) 75%,
      rgba(4, 5, 25, 1) 100%
    );
  }
  .horizontal {
    display: none;
    background: rgb(4, 5, 25);
    background: linear-gradient(
      90deg,
      rgba(4, 5, 25, 1) 0%,
      rgba(4, 5, 25, 0) 15%,
      rgba(4, 5, 25, 0) 75%,
      rgba(4, 5, 25, 1) 100%
    );

    @media only screen and (min-width: 1024px) {
      display: block;
    }
  }
`;

const MainDescription = styled.p`
  color: #f2f2f2;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 20px;
  width: 250px;
  line-height: 1.8;
  z-index: 2;
  visibility: hidden;
  transform: rotateX(6deg);
  text-align: center;
  @media only screen and (orientation: landscape) {
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 24px;
    width: 233px;
  }
  @media only screen and (min-width: 1500px) {
    font-size: 27px;
    width: 270px;
  }

  span {
    color: #68b5ef;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
`;

const Triangles = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50px);

  padding: 60px;
  z-index: 3;
  width: 320px;
  @media only screen and (orientation: landscape) {
    margin-top: 40px;
    width: 300px;
    height: 300px;
  }
  @media only screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin-top: 50px;
  }
  @media only screen and (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }
  @media only screen and (min-width: 1500px) {
    width: 500px;
    height: 500px;
  }
`;

const MandoQuote = styled.p`
  position: absolute;
  color: #d0d0d0;
  font-family: "Montserrat", sans-serif;
  font-size: 8px;
  bottom: 10%;
  @media only screen and (orientation: landscape) {
    font-size: 6px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 8px;
  }
  @media only screen and (min-height: 1300px) {
    display: none;
  }
  span {
    font-size: 12px;
  }
`;

const SVGWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.75;
  width: 85%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  visibility: hidden;

  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: bottom center;
  }
  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: bottom center;
  }
  &:nth-child(3) {
    transform: translate(-50%, -50%) rotate(0deg);
    transform-origin: bottom center;
  }

  svg {
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 116%;
    height: 116%;
  }
`;

const Header = () => {
  useEffect(() => {
    const desc = document.querySelector(".main-description");
    headerAnimation(desc).play();
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        mandoAnimation();
      }
    });
  }, []);
  return (
    <Wrapper className={"header"}>
      <div className="bg-gradient vertical" />
      <div className="bg-gradient horizontal" />
      <Triangles className="triangles">
        <SVGWrapper className="trianglesSVG">
          <Traingle1 />
        </SVGWrapper>
        <SVGWrapper className="trianglesSVG">
          <Traingle2 />
        </SVGWrapper>
        <SVGWrapper className="trianglesSVG">
          <Traingle3 />
        </SVGWrapper>

        <MainDescription className="main-description">
          Hi, my name is <span>Mateusz Mikulski</span> <br />I design and
          develop websites
          <br />
          <br />
          &#x270d; &#x1F933; &#x1F4bb; &#x1F320; &#x1F680; &#x1F4AB;
        </MainDescription>
      </Triangles>

      <IconScrollSlide />
      <MandoQuote className="mando-quote">
        this is the way...{" "}
        <span role="img" aria-label="robot">
          &#x1F916;
        </span>
      </MandoQuote>
    </Wrapper>
  );
};

export default Header;
