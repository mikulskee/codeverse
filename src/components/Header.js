import React, { useEffect } from "react";
import styled from "styled-components";
import headerBg from "../img/header-bg.jpg";
import logo from "../img/logo.png";
import IconScrollSlide from "./IconScrollSlide";
import {
  headerAnimation,
  mandoAnimation
} from "../animations/patternsAnimation";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transform: translate(0);
  height: 110vh;
  height: calc(var(--vh, 1vh) * 110);
  overflow: hidden;

  .header-pattern {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: scale(1.25);
    background-image: url(${headerBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(4, 5, 25);
    background: linear-gradient(
      180deg,
      rgba(4, 5, 25, 0.7) 0%,
      rgba(4, 5, 25, 0.4) 75%,
      rgba(4, 5, 25, 1) 100%
    );
  }

  img {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 130px;
  }
`;

const MainDescription = styled.p`
  display: block;
  color: #f2f2f2;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 20px;
  width: 250px;
  line-height: 1.8;
  transform: translateY(-50px);

  span {
    color: #68b5ef;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }

  /* span.design {
    font-family: "Courgette", cursive;
    font-weight: 500;
  }
  span.develop {
    font-family: "Share Tech Mono", monospace;
    font-weight: 500;
  } */
`;

const MandoQuote = styled.p`
  position: absolute;
  color: #d0d0d0;
  font-family: "Montserrat", sans-serif;
  font-size: 8px;
  bottom: 10%;
  span {
    font-size: 12px;
  }
`;

const Header = () => {
  useEffect(() => {
    headerAnimation();
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
      <div className="header-pattern" />
      <div className="bg-gradient" />
      <img src={logo} alt="logo" />
      <MainDescription className="main-description">
        Hi, my name is <span>Mateusz Mikulski</span> <br />i design and develop
        websites
        <br />
        <br />
        &#x270d; &#x1F933; &#x1F4bb; &#x1F320; &#x1F680; &#x1F4AB;
      </MainDescription>
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
