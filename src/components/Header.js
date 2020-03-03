import React, { useEffect } from "react";
import styled from "styled-components";
import headerBg from "../img/header-bg_1.jpg";
import triangles from "../img/triangles_1.png";
import IconScrollSlide from "./IconScrollSlide";
import { mandoAnimation } from "../animations/patternsAnimation";

const Wrapper = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transform: translate(0);
  height: 110vh;
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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50px);
  background-image: url(${triangles});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
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

const Header = () => {
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
      <Triangles>
        <MainDescription className="main-description">
          Hi, my name is <span>Mateusz Mikulski</span> <br />i design and
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
