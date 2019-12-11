import React from "react";
import styled from "styled-components";
import bgBack from "../img/bg_back.png";
import bgFront from "../img/bg_front.png";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  top: 0;
  left: 0;
  transform: translateY(0);
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  opacity: 1;
  background-image: url(${bgBack});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;

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
    transition: transform 0.5s ease-out;

    &.active {
      transform: translateY(-30%);
    }
  }

  &.active {
    transform: translateY(-15%);

    opacity: 0;
  }

  img {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 105px;
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
    color: #f2f2f2;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    font-size: 20px;
  }

  span.yellow {
    color: #ebe483;
  }
  span.design {
    font-family: "Courgette", cursive;
    font-weight: 500;
  }
  span.develop {
    font-family: "Share Tech Mono", monospace;
    font-weight: 500;
  }
`;

const Icon = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #f2f2f2;
  font-size: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    transform: rotate(-115deg);
  }
`;

const Header = () => {
  return (
    <Wrapper className={"header"}>
      <div className={"bg-front"} src={bgFront} />
      <div className={"bg-mask"} />
      <img src={logo} alt="" />
      <MainDescription className="main-description">
        Hi, my name is <span className={"yellow"}>Mateusz Mikulski</span> <br />{" "}
        i <span className={"design"}>design</span> and{" "}
        <span className={"develop"}>develop</span> websites
      </MainDescription>
      <Icon>
        <FontAwesomeIcon icon={faHandPointUp} />
      </Icon>
    </Wrapper>
  );
};

export default Header;
