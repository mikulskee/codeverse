import React from "react";
import styled from "styled-components";
import bgBack from "../img/bg_back.png";
import bgFront from "../img/bg_front.png";
import logo from "../img/logo.png";
import IconScrollSlide from "./IconScrollSlide";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transform: translateY(0);
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  opacity: 1;
  background-image: url(${bgBack});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .bg-front {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(0);
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    background-image: url(${bgFront});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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
  transform: translateY(-80px);

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
  return (
    <Wrapper className={"header"}>
      <div className={"bg-front"} src={bgFront} />
      <div className={"bg-mask"} />
      <img src={logo} alt="" />
      <MainDescription className="main-description">
        Hi, my name is <span>Mateusz Mikulski</span> <br />i design and develop
        websites
      </MainDescription>
      <IconScrollSlide />
    </Wrapper>
  );
};

export default Header;
