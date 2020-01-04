import React, { useEffect } from "react";
import styled from "styled-components";
import headerBg from "../img/header-bg.jpg";
import logo from "../img/logo.png";
import IconScrollSlide from "./IconScrollSlide";
import { headerAnimation } from "../animations/headerAnimation";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transform: translateY(0);
  height: 110vh;
  height: calc(var(--vh, 1vh) * 110);
  opacity: 1;
  overflow: hidden;

  .pattern {
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
  .bg-mask {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgb(4, 5, 25);
    opacity: 0;
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

const Header = () => {
  useEffect(() => {
    headerAnimation();
  });
  return (
    <Wrapper className={"header"}>
      <div className="pattern" />
      <div className="bg-gradient" />
      <div className="bg-mask" />
      <img src={logo} alt="logo" />
      <MainDescription className="main-description">
        Hi, my name is <span>Mateusz Mikulski</span> <br />i design and develop
        websites
        <br />
        <br />
        &#x270d; &#x1F933; &#x1F4bb; &#x1F320; &#x1F680;
      </MainDescription>
      <IconScrollSlide />
    </Wrapper>
  );
};

export default Header;
